using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using WebTestApp.Base.Base.Interfaces;
using WebTestApp.BLL.Base.Services.Interfaces;

namespace WebTestApp.App_Start
{
    public static class ServiceAutoConfig
    {
        public static void Configure(IServiceCollection services)
        {
            Assembly.Load("WebTestApp.BLL");
            var type = typeof(IService);
            var types = AppDomain.CurrentDomain.GetAssemblies().SelectMany(s => s.GetTypes()).Where(p => type.IsAssignableFrom(p) && p.IsClass && !p.IsAbstract).ToList();
            types.ForEach(c =>
            {
                var interfaces = c.GetInterfaces()
                .Where(x =>
                    x.Name != typeof(IDataService).Name &&
                    x.Name != typeof(IService).Name
                ).ToList();
                interfaces.ForEach(i =>
                {
                    services.AddTransient(i, c);
                });
            });

        }
    }
}
