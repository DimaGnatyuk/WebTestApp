using System;
using System.Collections.Generic;
using System.Text;

namespace WebTestApp.BLL.Exceptions
{
    public class NotFoundException : CustomException
    {
        public NotFoundException(string message) : base(message)
        {
            Code = System.Net.HttpStatusCode.NotFound;
            ErrorMessage = message;
        }
    }
}
