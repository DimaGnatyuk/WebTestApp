using System;
using System.Collections.Generic;
using System.Text;
using WebTestApp.BLL.Base.Services.Interfaces;
using WebTestApp.BLL.Components.UserComponents.Entities;
using WebTestApp.BLL.Components.UserComponents.Models;

namespace WebTestApp.BLL.Components.UserComponents.Services.Interfaces
{
    public interface IUserService : IDataService
    {
        List<ApplicationUser> GetAll();
    }
}
