using MedicalSystem.Data;
using MedicalSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MedicalSystem.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class loginController : ControllerBase
    {
        MedicalSystemContext db;
        Doctor doctor;
        Patient patient;
        public loginController(MedicalSystemContext _db)
        {
            db = _db;
        }

        [HttpPost]
        public IActionResult login(AccountUser user)
        {
            // Hash the user password
             //   user.password = AccountUser.hashPassword(user.password);
            //user.password = AccountUser.hashPassword(user.password);
            if (user.role == "doctor")
            {

                doctor = db.Doctors.Where(a => a.email == user.email && a.password == user.password).FirstOrDefault();

                if (doctor != null)
                {
                    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("my_secret_key_HRRDMF"));    

                    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                    var data = new List<Claim>();
                    data.Add(new Claim("ID", doctor.ID.ToString()));
                    data.Add(new Claim(ClaimTypes.Role, user.role));
                    data.Add(new Claim(ClaimTypes.Email, doctor.email));

                    var token = new JwtSecurityToken(
                        claims: data,
                        expires: DateTime.Now.AddMinutes(120),
                        signingCredentials: credentials
                    );

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return Unauthorized("Username or Password is incorrect");
                }

            }
            else if(user.role == "patient")
            {

                patient = db.Patients.Where(a => a.email == user.email && a.password == user.password).FirstOrDefault();
                if(patient != null)
                {
                    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("my_secret_key_HRRDMF"));

                    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                    var data = new List<Claim>();
                    data.Add(new Claim("ID", patient.ID.ToString()));
                    data.Add(new Claim(ClaimTypes.Role, user.role));
                    data.Add(new Claim(ClaimTypes.Email, patient.email));

                    var token = new JwtSecurityToken(
                        claims: data,
                        expires: DateTime.Now.AddMinutes(120),
                        signingCredentials: credentials
                    );

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return Unauthorized("Username or Password is incorrect");
                }
            }
            else
            {
                return  BadRequest("Invalid Role");
            }
        }
    }
}
