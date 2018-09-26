using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebTestApp.Base.Base.Interfaces;

namespace WebTestApp.BLL.Base.Services.Interfaces
{
    public interface IDataService : IService
    {
        Task Commit();
    }
}
