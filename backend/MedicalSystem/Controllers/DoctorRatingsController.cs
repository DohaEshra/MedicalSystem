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
    public class DoctorRatingsController : ControllerBase
    {
        private readonly MedicalSystemContext _context;

        public DoctorRatingsController(MedicalSystemContext context)
        {
            _context = context;
        }

        // GET: api/DoctorRatings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorRating>>> GetDoctorRatings()
        {
            return await _context.DoctorRatings.ToListAsync();
        }

        // GET: api/DoctorRatings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorRating>> GetDoctorRating(int id)
        {
            var doctorRating = await _context.DoctorRatings.FindAsync(id);

            if (doctorRating == null)
            {
                return NotFound();
            }

            return doctorRating;
        }

        // PUT: api/DoctorRatings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctorRating(int id, DoctorRating doctorRating)
        {
            if (id != doctorRating.PID)
            {
                return BadRequest();
            }

            _context.Entry(doctorRating).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoctorRatingExists(id))
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

        // POST: api/DoctorRatings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DoctorRating>> PostDoctorRating(DoctorRating doctorRating)
        {
            _context.DoctorRatings.Add(doctorRating);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DoctorRatingExists(doctorRating.PID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDoctorRating", new { id = doctorRating.PID }, doctorRating);
        }

        // DELETE: api/DoctorRatings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctorRating(int id)
        {
            var doctorRating = await _context.DoctorRatings.FindAsync(id);
            if (doctorRating == null)
            {
                return NotFound();
            }

            _context.DoctorRatings.Remove(doctorRating);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DoctorRatingExists(int id)
        {
            return _context.DoctorRatings.Any(e => e.PID == id);
        }
    }
}
