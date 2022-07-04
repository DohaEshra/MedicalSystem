using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MedicalSystem.Data;
using MedicalSystem.Models;
using System.Security.Claims;

namespace MedicalSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordController : ControllerBase
    {
        private readonly MedicalSystemContext _context;
        private Patient currentPatient { get; set; }
        public RecordController(MedicalSystemContext context)
        {
            _context = context;
        }

        // GET: api/Records
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Record>>> GetRecords()
        {
            this.currentPatient = GetCurrentUser();
            if (_context.Records == null)
            {
                return NotFound();
            }
            return await _context.Records.Where(a => a.PID == currentPatient.ID).ToListAsync();

        }

        // GET: api/Records/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Record>> GetRecord(int id)
        {
            var @record = await _context.Records.FindAsync(id);

            if (@record == null)
            {
                return NotFound();
            }

            return @record;
        }

        // GET: api/Records/pid/did/date
        [HttpGet("{pid}/{did}/{date}")]
        public async Task<ActionResult<IEnumerable<Record>>> GetSpecificRecords(int pid,int did,DateTime date)
        {
            List<Record> Record = await _context.Records.Where(r => r.DID == did && r.PID == pid && r.date == date).ToListAsync();

            if (_context.Records == null)
            {
                return NotFound();
            }

            return Record;
        }

        //api/Record/pid/did/date
        [HttpPut("{pid}/{did}/{date}")]
        public async Task<IActionResult> RecordTests(int pid,int did,DateTime date, Record @record)
        {
            if (did != @record.DID)
            {
                return BadRequest();
            }

            Record Record = await _context.Records.Where(r =>  r.DID==did && r.PID==pid && r.date==date ).FirstOrDefaultAsync();
            if(Record != null)
            {
                await _context.Procedures.Update_RecordAsync(@record.file_description, @record.testType, pid, did, date, @record.FNO, @record.summary, @record.prescription);
            }
            else
            {
                await _context.Procedures.Insert_RecordAsync(pid, did, date, @record.file_description, @record.testType, @record.summary, @record.prescription);
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RecordExists(@record.DID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }



       
        // PUT: api/Records/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecord(Guid id, Record @record)
        {
            if (id != @record.FNO)
            {
                return BadRequest();
            }
            Record Record = await _context.Records.Where(r => r.DID == @record.DID && r.PID == @record.PID  && r.FNO == @record.FNO).FirstOrDefaultAsync();
            if (Record != null)
            {
                await _context.Procedures.Update_RecordAsync(@record.file_description, @record.testType, @record.PID, @record.DID, @record.date, @record.FNO, @record.summary, @record.prescription);
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecordExists(id))
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

        // POST: api/Record
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Record>> PostRecord(Record @record)
        {
            _context.Records.Add(@record);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RecordExists(@record.DID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRecord", new { id = @record.DID }, @record);
        }

        // DELETE: api/Records/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecord(Guid id)
        {
            var @record = await _context.Records.Where(r => r.FNO==id).FirstOrDefaultAsync();
            if (@record == null)
            {
                return NotFound();
            }

            _context.Records.Remove(@record);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecordExists(int id)
        {
            return _context.Records.Any(e => e.DID == id);
        }
        private bool RecordExists(Guid id)
        {
            return _context.Records.Any(e => e.FNO == id);
        }
        private Patient GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;// get identity of loggedin user
            if (identity != null)
            {
                var userClaims = identity.Claims;
                return new Patient
                {
                    ID = int.Parse(userClaims.FirstOrDefault(o => o.Type == "ID")?.Value),
                    email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value
                };
            }
            return null;
        }
    }
}

