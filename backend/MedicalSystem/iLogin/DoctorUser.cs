using MedicalSystem.Data;
using MedicalSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MedicalSystem.iLogin
{

    public class DoctorUser //: iLogin
    {
        public MedicalSystemContext db;
        public DoctorUser(MedicalSystemContext db)
        {
            this.db = db;
        }
        public void login(LoginContext context, AccountUser user)
        {
            if (user.role == "doctor")
            {

                var doctor = db.Doctors.Where(a => a.email == user.email && a.password == user.password).FirstOrDefault();

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
                        expires: DateTime.Now.AddMinutes(460),
                        signingCredentials: credentials
                    );

                    // return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    // return Unauthorized("Username or Password is incorrect");
                }

            }
        }
    }
}
