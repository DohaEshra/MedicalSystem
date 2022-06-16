using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MedicalSystem.Data;
using MedicalSystem.Models;

namespace MedicalSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitController : ControllerBase
    {
        private readonly MedicalSystemContext _context;

        public VisitController(MedicalSystemContext context)
        {
            _context = context;
        }

        // GET: api/Visit
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Visit>>> GetVisits()
        {
          if (_context.Visits == null)
          {
              return NotFound();
          }
            return await _context.Visits.ToListAsync();
        }

        // GET: api/Visit/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Visit>> GetVisit(int id)
        {
          if (_context.Visits == null)
          {
              return NotFound();
          }
            var visit = await _context.Visits.FindAsync(id);

            if (visit == null)
            {
                return NotFound();
            }

            return visit;
        }

        // PUT: api/Visit/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVisit(int id, Visit visit)
        {
            if (id != visit.PID)
            {
                return BadRequest();
            }

            _context.Entry(visit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VisitExists(id))
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

        // POST: api/Visit
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Visit>> PostVisit(Visit visit)
        {
          if (_context.Visits == null)
          {
              return Problem("Entity set 'MedicalSystemContext.Visits'  is null.");
          }
            _context.Visits.Add(visit);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (VisitExists(visit.PID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetVisit", new { id = visit.PID }, visit);
        }

        // DELETE: api/Visit/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVisit(int id)
        {
            if (_context.Visits == null)
            {
                return NotFound();
            }
            var visit = await _context.Visits.FindAsync(id);
            if (visit == null)
            {
                return NotFound();
            }

            _context.Visits.Remove(visit);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VisitExists(int id)
        {
            return (_context.Visits?.Any(e => e.PID == id)).GetValueOrDefault();
        }
    }
}
