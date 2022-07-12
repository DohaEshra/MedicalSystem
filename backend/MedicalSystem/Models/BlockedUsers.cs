using System.ComponentModel.DataAnnotations;

namespace MedicalSystem.Models
{
    public class BlockedUsers
    {
        [Key]
        public string email { get; set; }
    }
}
