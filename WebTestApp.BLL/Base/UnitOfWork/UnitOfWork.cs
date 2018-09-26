using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebTestApp.BLL.Base.Repositories;
using WebTestApp.BLL.Base.Repositories.Interfaces;
using WebTestApp.BLL.Base.UnitOfWork.Interfaces;
using WebTestApp.BLL.Components.UserComponents.Entities;
using WebTestApp.BLL.Database;

namespace WebTestApp.BLL.Base.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationDbContext _applicationDbContext;
        public IRepository<ApplicationUser> ApplicationUsers { get; set; }
        
        public UnitOfWork(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
            ApplicationUsers = new Repository<ApplicationUser>(applicationDbContext);
        }

        public async Task Commit()
        {
            await _applicationDbContext.SaveChangesAsync();
        }

        public ApplicationDbContext GetContext()
        {
            return _applicationDbContext;
        }
    }
}
