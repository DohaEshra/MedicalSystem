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
        public IActionResult login(string email, string password, string Role)
        { 
            if (Role == "Doctor")
            {
                doctor = db.Doctors.Where(a => a.email == email && a.password == password).FirstOrDefault();
                if (doctor != null)
                {
                    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("myKey"));    

                    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                    var data = new List<Claim>();
                    data.Add(new Claim("ID", doctor.ID.ToString()));
                    data.Add(new Claim("Role", Role));
                    data.Add(new Claim("email", doctor.email));

                    var token = new JwtSecurityToken(
                        claims: data,
                        expires: DateTime.Now.AddMinutes(120),
                        signingCredentials: credentials
                    );

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return Unauthorized();
                }

            }
            else if(Role == "Patient")
            {
                patient = db.Patients.Where(a => a.email == email && a.password == password).FirstOrDefault();
                if (patient != null)
                {
                    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("my_secret_key_1234567"));

                    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                    var data = new List<Claim>();
                    data.Add(new Claim("ID", patient.ID.ToString()));
                    data.Add(new Claim("Role", Role));
                    data.Add(new Claim("email", patient.email));

                    var token = new JwtSecurityToken(
                        claims: data,
                        expires: DateTime.Now.AddMinutes(120),
                        signingCredentials: credentials
                    );

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
            {
                return  BadRequest("Role is a must");
            }
        }
    }
}
