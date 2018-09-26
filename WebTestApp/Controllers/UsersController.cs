using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebTestApp.BLL.Components.SecurityComponent.Models;
using WebTestApp.BLL.Components.UserComponents.Services.Interfaces;

namespace WebTestApp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        public IActionResult Get()
        {
            return Json(_userService.GetAll());
        }
    }
}
