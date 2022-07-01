using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalSystem.Models
{
    public class DoctorRating
    {
        [Key]
        public int PID { get; set; }
        [Key]
        public int DID { get; set; }
        public int Rating { get; set; }

        //[ForeignKey("DID")]
        //[InverseProperty("DoctorRatings")]
        //public virtual Doctor DIDNavigation { get; set; }
        //[ForeignKey("PID")]
        //[InverseProperty("DoctorRatings")]
        //public virtual Patient PIDNavigation { get; set; }


    }
}
