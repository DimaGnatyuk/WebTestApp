using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebTestApp.BLL.Base.Services;
using WebTestApp.BLL.Base.Services.Interfaces;
using WebTestApp.BLL.Base.UnitOfWork.Interfaces;
using WebTestApp.BLL.Components.UserComponents.Entities;
using WebTestApp.BLL.Components.UserComponents.Models;
using WebTestApp.BLL.Components.UserComponents.Services.Interfaces;

namespace WebTestApp.BLL.Components.UserComponents.Services
{
    public class UserService : DataService, IUserService
    {
        public UserService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        List<ApplicationUser> IUserService.GetAll()
        {
            return _unitOfWork.ApplicationUsers.Get().ToList();
        }
    }
}
