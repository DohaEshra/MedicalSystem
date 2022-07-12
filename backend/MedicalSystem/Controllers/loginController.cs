using MedicalSystem.Data;
using MedicalSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MedicalSystem.Controllers
{
    [AllowAnonymous]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class loginController : ControllerBase
    {
        MedicalSystemContext db;
        Doctor doctor;
        Patient patient;
        Other other;
        public loginController(MedicalSystemContext _db)
        {
            db = _db;
        }

        [HttpPost]
        public IActionResult login(AccountUser user)
        {
            // Hash the user password
             user.password = AccountUser.hashPassword(user.password);

            if (user.role == "doctor")
            {
                doctor = db.Doctors.Where(a => a.email == user.email && a.password == user.password).FirstOrDefault();
                if (doctor != null)
                {
                    var token = makeToken(user,doctor);
                    return Ok(token);
                }
                else
                {
                    return Unauthorized("Username or Password is incorrect");
                }
            }
            else if (user.role == "patient")
            {
                patient = db.Patients.Where(a => a.email == user.email && a.password == user.password).FirstOrDefault();
                if (patient != null)
                {
                    var token = makeToken(user, patient);
                    return Ok(token);
                }
                else
                {
                    return Unauthorized("Username or Password is incorrect");
                }
            }
            else if (user.role == "laboratory technician" || user.role == "radiographer" || user.role == "pharmacist")
            {
                other = db.Others.Where(a => a.email == user.email && a.password == user.password).FirstOrDefault();
                if (other != null)
                {
                    var token = makeToken(user, other);
                    return Ok(token);
                }
                else
                {
                    return Unauthorized("Username or Password is incorrect");
                }
            }
            else if (user.role == "admin")
            {
                if(user.email.ToLower() == "admin@gmail.com")
                {
                    var token = makeToken(user, "admin");
                    return Ok(token);
                }
                else
                {
                    return Unauthorized("Username or Password is incorrect");
                }
            }
            else
            {
                return BadRequest("Invalid Role");
            }
        }

        private string makeToken(AccountUser user, dynamic loggedInUser)
        {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("my_secret_key_HRRDMF"));

                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var data = new List<Claim>();

            if(user.role == "admin")
                data.Add(new Claim("ID", "1"));
            else
                data.Add(new Claim("ID", loggedInUser.ID.ToString()));

            data.Add(new Claim(ClaimTypes.Role, user.role));
            data.Add(new Claim(ClaimTypes.Email, user.email));

                var token = new JwtSecurityToken(
                    claims: data,
                    expires: DateTime.Now.AddMinutes(460),
                    signingCredentials: credentials
                );

                return new JwtSecurityTokenHandler().WriteToken(token);
           }


    }
}
