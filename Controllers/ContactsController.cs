using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularApp2.Models;

namespace AngularApp2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly ContactContext _context;

        public ContactsController(ContactContext context)
        {
            _context = context;
        }

        /* GET: api/Contacts
        [HttpGet]
        public IEnumerable<Contact> GetContacts()
        {
            return _context.Contacts;
        }*/

        // GET: api/Contacts
        [HttpGet]
        public IEnumerable<Contact> GetContacts([FromQuery] string name, [FromQuery] string izbrano)
        {
            var contacts = from s in _context.Contacts select s;

            if (!String.IsNullOrEmpty(name))
            {
                switch (izbrano)
                {
                    case "firstName":
                        contacts = contacts.Where(s => s.FirstName.Contains(name));
                        break;
                    case "lastName":
                        contacts = contacts.Where(s => s.LastName.Contains(name));
                        break;
                    case "address":
                        contacts = contacts.Where(s => s.Address.Contains(name));
                        break;
                    case "phoneNumber":
                        contacts = contacts.Where(s => s.PhoneNumber.Contains(name));
                        break;
                }
            }
 
            return contacts;
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContact([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var contact = await _context.Contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        // PUT: api/Contacts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContact([FromRoute] long id, [FromBody] Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contact.Id)
            {
                return BadRequest();
            }

            if ( _context.Contacts.FirstOrDefault(x => x.PhoneNumber == contact.PhoneNumber && x.Id != contact.Id) != null)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(contact).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
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

        // POST: api/Contacts
        [HttpPost]
        public async Task<IActionResult> PostContact([FromBody] Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (_context.Contacts.FirstOrDefault(x => x.PhoneNumber == contact.PhoneNumber) != null)
            {
                return BadRequest(ModelState);
            }

            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContact", new { id = contact.Id }, contact);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var contact = await _context.Contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }

            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();

            return Ok(contact);
        }

        private bool ContactExists(long id)
        {
            return _context.Contacts.Any(e => e.Id == id);
        }
    }
}