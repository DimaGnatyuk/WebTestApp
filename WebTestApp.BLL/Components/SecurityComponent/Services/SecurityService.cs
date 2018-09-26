using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebTestApp.BLL.Base.Services;
using WebTestApp.BLL.Base.UnitOfWork.Interfaces;
using WebTestApp.BLL.Components.SecurityComponent.Models;
using WebTestApp.BLL.Components.SecurityComponent.Services.Interfaces;
using WebTestApp.BLL.Components.UserComponents.Entities;
using WebTestApp.BLL.Exceptions;

namespace WebTestApp.BLL.Components.SecurityComponent.Services
{
    public class SecurityService : DataService, ISecurityService
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _configuration;

        public SecurityService(IUnitOfWork unitOfWork, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IConfiguration configuration) : base(unitOfWork)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<TokenDto> Login(LoginDto model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);

            if (result.Succeeded)
            {
                var user = _userManager.Users.SingleOrDefault(r => r.Email == model.Email);
                var token = GenerateJwtToken(model.Email, user);
                var roles = await _userManager.GetRolesAsync(user);
                var access = new TokenDto
                {
                    Email = user.Email,
                    Token = new JwtSecurityTokenHandler().WriteToken(token).ToString(),
                    Id = user.Id
                };
                return access;
            }
            else
            {
                throw new NotFoundException("User not found");
            }
        }

        public async Task<bool> Register(RegistrationDto model)
        {
            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email
            };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return true;
            }
            else
            {
                throw new IncorrectValueException(result.Errors.FirstOrDefault()?.Description);
            }
        }


        private JwtSecurityToken GenerateJwtToken(string email, ApplicationUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return token;
        }
    }
}
