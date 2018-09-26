using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace WebTestApp.BLL.Base.Configuration
{
    public interface IAutoMapperConfiguration
    {
        void Configure(IMapperConfigurationExpression config);
    }
}
