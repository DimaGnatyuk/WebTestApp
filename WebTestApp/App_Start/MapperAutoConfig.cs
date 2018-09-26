using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using WebTestApp.BLL.Base.Configuration;

namespace WebTestApp.App_Start
{
    public class MapperAutoConfig
    {
        public static void Configure(IMapperConfigurationExpression cnf)
        {
            Assembly.Load("WebTestApp.BLL");
            var type = typeof(IAutoMapperConfiguration);
            var types = AppDomain.CurrentDomain.GetAssemblies().SelectMany(s => s.GetTypes()).Where(p => type.IsAssignableFrom(p) && p.IsClass && !p.IsAbstract).ToList();
            types.ForEach(c =>
            {
                var uc = (IAutoMapperConfiguration)Activator.CreateInstance(c);
                uc.Configure(cnf);
            });
        }
    }
}
