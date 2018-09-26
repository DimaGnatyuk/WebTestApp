using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace WebTestApp.BLL.Exceptions
{
    public abstract class CustomException : Exception
    {
        public HttpStatusCode Code { get; set; } = HttpStatusCode.InternalServerError;
        public string ErrorMessage { get; set; }

        public CustomException(string message) : base(message)
        {

        }
    }
}
