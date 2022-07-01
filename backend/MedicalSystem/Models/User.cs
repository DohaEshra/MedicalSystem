using System.Security.Cryptography;
using System.Text;

namespace MedicalSystem.Models
{
    public class AccountUser
    {
        public string email { get; set; }
        public string password { get; set; }
        public string role { get; set; }

        public static string hashPassword(string password)
        {
            // the algorithm which is used to hash the password
            var sha = SHA256.Create();

            //change password into byte array so it could be used by function that hash password in sha
            var asByteArray = Encoding.Default.GetBytes(password);

            //hash the password
            var hashedPassword = sha.ComputeHash(asByteArray);

            //return password again into string agter hashing
            return Convert.ToBase64String(hashedPassword);
        }
    }
}
