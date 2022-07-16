using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MedicalSystem.Data;
using MedicalSystem.Models;
using Microsoft.AspNetCore.Authorization;
using System.Text;

namespace MedicalSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly MedicalSystemContext _context;

        public PatientController(MedicalSystemContext context)
        {
            _context = context;
        }

        // GET: api/Patients
        [HttpGet]
        [Authorize(Roles = "doctor")]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
        {
            var patients = await _context.Patients.ToListAsync();
            return patients;
        }

        //get patients who need to make lab tests 
        [HttpGet("LabPatients")]
        [Authorize(Roles = "laboratory technician")]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatientsForLab()
        {
            var patients = _context.Patients.Where(p => p.Records.Any(p => p.attached_files == null && p.file_description != string.Empty && p.testType == "T" && p.done == 0)).ToListAsync();
            return await patients;
        }

        //get patients who need to make scans
        [HttpGet("ScanPatients")]
        [Authorize(Roles = "radiographer")]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatientsForScan()
        {
            var patients = await _context.Patients.Where(p => p.Records.Any(p => p.attached_files == null && p.file_description != string.Empty && p.testType == "S" && p.done == 0)).ToListAsync();
            return patients;
        }
        
        //get patients to update/delete thier files
        [HttpGet("adminFilesPatients")]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatientsForadmin()
        {
            var patients = await _context.Patients.Where(p => p.Records.Any(p => p.done == 1)).ToListAsync();
            return patients;
        }

        // GET: api/Patients/5
        [Authorize(Roles = "patient,radiographer,admin,doctor,laboratory technician")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            return patient;
        }

        // PUT: api/Patients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = "patient")]
        public async Task<IActionResult> PutPatient(int id, Patient patient)
        {
            if (id != patient.ID)
            {
                return BadRequest();
            }

            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Patients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<Patient>> PostPatient(Patient patient)
        {
            var patientMail = _context.Patients.Where(a => a.email == patient.email).FirstOrDefault();
            if (patientMail != null)
                return BadRequest("This email already exists !");

            var patientPhone = _context.Patients.Where(a => a.phone == patient.phone).FirstOrDefault();
            if (patientPhone != null)
                return BadRequest("This phone already exists !");

            patient.password = AccountUser.hashPassword(patient.password);
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatient", new { id = patient.ID }, patient);
        }

        // PUT: api/Doctors/change/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = "patient")]
        [HttpPut("change/{id}")]
        public async Task<IActionResult> ChangePassword(int id, dynamic patient)
        {
            string oldPass = patient.oldPass;
            string newPass = patient.newPass;

            var pat =  _context.Patients.FirstOrDefault(a=>a.ID==id);
            if (pat == null)
                return NotFound();

            // Hash the old password
            oldPass = AccountUser.hashPassword(oldPass);
            if (pat.password != oldPass)
                return BadRequest(" Your old password is incorrect!");

            // Hash the new password
            newPass = AccountUser.hashPassword(newPass);
            if (pat.password == newPass)
                return BadRequest("you haven't changed your password");

            pat.password = newPass;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Patients/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeletePatient(int id)
        //{
        //    var patient = await _context.Patients.FindAsync(id);
        //    if (patient == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Patients.Remove(patient);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool PatientExists(int id)
        {
            return _context.Patients.Any(e => e.ID == id);
        }
    }
}
