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

namespace MedicalSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OtherController : ControllerBase
    {
        private readonly MedicalSystemContext _context;

        public OtherController(MedicalSystemContext context)
        {
            _context = context;
        }

        // GET: api/Other
        [Authorize(Roles ="admin")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Other>>> GetOthers()
        {
            return await _context.Others.ToListAsync();
        }

        [HttpPost("blocked")]
        public async Task<ActionResult> blockEmployee(BlockedUsers BK)
        {
            //BlockedUsers Bk = new BlockedUsers();
            //Bk.email = email;
            //return await _context.Others.ToListAsync();
            if (BK.email == null) return BadRequest("This email doesnt exist !");

            _context.Blocked.Add(BK);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // GET: api/Other/5
        [Authorize(Roles = "admin,radiographer,laboratory technician,pharmacist")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Other>> GetOther(int id)
        {
            var other = await _context.Others.FindAsync(id);

            if (other == null)
            {
                return NotFound();
            }

            return other;
        }

        // PUT: api/Other/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles ="admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOther(int id, Other other)
        {
            if (id != other.ID)
            {
                return BadRequest();
            }

            _context.Entry(other).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OtherExists(id))
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
        [Authorize(Roles = "admin")]
        [HttpGet("NotBlocked")]
        public async Task<ActionResult<IEnumerable<Other>>> GetNotBlockedEmployees()
        {
            return await _context.Others.Where(a => !_context.Blocked.Any(p2 => p2.email == a.email)).ToListAsync();
        }

        // POST: api/Other
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles ="admin")]
        [HttpPost]
        public async Task<ActionResult<Other>> PostOther(Other other)
        {
            var otherMail = _context.Others.Where(a => a.email == other.email).FirstOrDefault();
            if (otherMail != null)
                return BadRequest("This email already exists !");

            var otherPhone = _context.Others.Where(a => a.phone == other.phone).FirstOrDefault();
            if (otherPhone != null)
                return BadRequest("This phone already exists !");

            other.password = AccountUser.hashPassword(other.password);
            _context.Others.Add(other);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOther", new { id = other.ID }, other);
        }

        // DELETE: api/Other/5
        [Authorize(Roles ="admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOther(int id)
        {
            var other = await _context.Others.FindAsync(id);
            if (other == null)
            {
                return NotFound();
            }

            _context.Others.Remove(other);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OtherExists(int id)
        {
            return _context.Others.Any(e => e.ID == id);
        }
    }
}
