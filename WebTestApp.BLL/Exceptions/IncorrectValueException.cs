using System;
using System.Collections.Generic;
using System.Text;

namespace WebTestApp.BLL.Exceptions
{
    public class IncorrectValueException : CustomException
    {
        public IncorrectValueException(string message) : base(message)
        {
            ErrorMessage = message;
        }
    }
}
