using MedicalSystem.Models;
using Microsoft.AspNetCore.Mvc;

namespace MedicalSystem.iLogin
{
    public interface iLogin
    {
        public IActionResult login(LoginContext context, AccountUser user); //interface
    }
}
