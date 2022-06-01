﻿using System;
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
    public class Works_inController : ControllerBase
    {
        private readonly MedicalSystemContext _context;

        public Works_inController(MedicalSystemContext context)
        {
            _context = context;
        }

        // GET: api/Works_in
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Works_in>>> GetWorks_ins()
        {
          if (_context.Works_ins == null)
          {
              return NotFound();
          }
            return await _context.Works_ins.ToListAsync();
        }

        // GET: api/Works_in/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Works_in>> GetWorks_in(int id)
        {
          if (_context.Works_ins == null)
          {
              return NotFound();
          }
            var works_in = await _context.Works_ins.FindAsync(id);

            if (works_in == null)
            {
                return NotFound();
            }

            return works_in;
        }

        // PUT: api/Works_in/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorks_in(int id, Works_in works_in)
        {
            if (id != works_in.DID)
            {
                return BadRequest();
            }

            _context.Entry(works_in).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Works_inExists(id))
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

        // POST: api/Works_in
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Works_in>> PostWorks_in(Works_in works_in)
        {
          if (_context.Works_ins == null)
          {
              return Problem("Entity set 'MedicalSystemContext.Works_ins'  is null.");
          }
            _context.Works_ins.Add(works_in);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Works_inExists(works_in.DID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetWorks_in", new { id = works_in.DID }, works_in);
        }

        // DELETE: api/Works_in/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorks_in(int id)
        {
            if (_context.Works_ins == null)
            {
                return NotFound();
            }
            var works_in = await _context.Works_ins.FindAsync(id);
            if (works_in == null)
            {
                return NotFound();
            }

            _context.Works_ins.Remove(works_in);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Works_inExists(int id)
        {
            return (_context.Works_ins?.Any(e => e.DID == id)).GetValueOrDefault();
        }
    }
}
