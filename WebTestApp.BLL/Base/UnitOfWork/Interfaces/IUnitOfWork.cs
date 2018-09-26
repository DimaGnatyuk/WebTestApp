using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebTestApp.BLL.Base.Repositories.Interfaces;
using WebTestApp.BLL.Components.UserComponents.Entities;
using WebTestApp.BLL.Database;

namespace WebTestApp.BLL.Base.UnitOfWork.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<ApplicationUser> ApplicationUsers { get; set; }
       

        Task Commit();
        ApplicationDbContext GetContext();
    }
}
