using Microsoft.AspNetCore.Http;

namespace MedicalSystem.Models
{
    public class UploadedFile
    {
        public Record @record { get; set; }
        public FormFile File { get; set; }
    }
}
