using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTestApp.BLL.Base.Repositories.Interfaces
{
    public interface IRepository<T> where T : class
    {
        Task AddAsync(T entity);
        Task AddAsync(IEnumerable<T> array);
        IQueryable<T> Get();
        bool Any();
        bool Delete(T entity);
    }
}
