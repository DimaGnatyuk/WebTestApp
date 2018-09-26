using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebTestApp.BLL.Components.SecurityComponent.Models;
using WebTestApp.BLL.Components.SecurityComponent.Services.Interfaces;

namespace WebTestApp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class UserController : Controller
    {
        private readonly ISecurityService _securityService;

        public UserController(ISecurityService securityService)
        {
            _securityService = securityService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginDto model)
        {
            return Json(await _securityService.Login(model));
        }

        [HttpPost]
        public async Task<IActionResult> Registration([FromBody] RegistrationDto model)
        {
            return Json(await _securityService.Register(model));
        }
    }
}
