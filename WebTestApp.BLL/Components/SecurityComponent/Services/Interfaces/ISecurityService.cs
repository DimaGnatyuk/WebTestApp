using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebTestApp.BLL.Base.Services.Interfaces;
using WebTestApp.BLL.Components.SecurityComponent.Models;

namespace WebTestApp.BLL.Components.SecurityComponent.Services.Interfaces
{
    public interface ISecurityService : IDataService
    {
        Task<TokenDto> Login(LoginDto model);
        Task<bool> Register(RegistrationDto model);
    }
}
