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

        // GET: api/Record
        [HttpGet("list/{PID}")]
        public async Task<ActionResult<IEnumerable<Record>>> GetRecords(int PID)
        {
            this.currentPatient = GetCurrentUser();
          if (_context.Records == null)
          {
              return NotFound();
          }
            return await _context.Records.Where(a => a.PID == currentPatient.ID).ToListAsync();
        }

        // GET: api/Record/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Record>> GetRecord(int id)
        {
          if (_context.Records == null)
          {
              return NotFound();
          }
            var @record = await _context.Records.FindAsync(id);

            if (@record == null)
            {
                return NotFound();
            }

            return @record;
        }

        // PUT: api/Record/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecord(int id, Record @record)
        {
            if (id != @record.DID)
            {
                return BadRequest();
            }

            _context.Entry(@record).State = EntityState.Modified;

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
          if (_context.Records == null)
          {
              return Problem("Entity set 'MedicalSystemContext.Records'  is null.");
          }
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

        // DELETE: api/Record/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecord(int id)
        {
            if (_context.Records == null)
            {
                return NotFound();
            }
            var @record = await _context.Records.FindAsync(id);
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
            return (_context.Records?.Any(e => e.DID == id)).GetValueOrDefault();
        }

        private Patient GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;// get identity of loggedin user
              if (identity != null)    
            {     var userClaims = identity.Claims;   
                return new Patient           
                {                    
                    ID = int.Parse(userClaims.FirstOrDefault(o => o.Type == "ID")?.Value),         
                    email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value         
                };           
            }             return null;          }
        }
}
