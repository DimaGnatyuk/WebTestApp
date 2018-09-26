using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebTestApp.BLL.Base.Services.Interfaces;
using WebTestApp.BLL.Base.UnitOfWork.Interfaces;

namespace WebTestApp.BLL.Base.Services
{
    public abstract class DataService : IDataService
    {
        protected IUnitOfWork _unitOfWork;
        public DataService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task Commit()
        {
            await _unitOfWork.Commit();
        }
    }
}
