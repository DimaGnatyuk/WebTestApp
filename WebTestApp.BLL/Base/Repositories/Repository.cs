using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebTestApp.BLL.Base.Repositories.Interfaces;
using WebTestApp.BLL.Database;

namespace WebTestApp.BLL.Base.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationDbContext dbContext;

        public Repository(ApplicationDbContext context)
        {
            dbContext = context;
        }

        public async Task AddAsync(T entity)
        {
            await dbContext.Set<T>().AddAsync(entity);
        }

        public async Task AddAsync(IEnumerable<T> array)
        {
            await dbContext.Set<T>().AddRangeAsync(array);
        }

        public bool Any()
        {
            return dbContext.Set<T>().Any();
        }

        public bool Delete(T entity)
        {
            return dbContext.Set<T>().Remove(entity).Entity != null;
        }

        public IQueryable<T> Get()
        {
            return dbContext.Set<T>();
        }
    }
}
