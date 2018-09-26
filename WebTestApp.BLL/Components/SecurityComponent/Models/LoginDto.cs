using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebTestApp.BLL.Components.SecurityComponent.Models
{
    public class LoginDto
    {
        [Required(AllowEmptyStrings = false), EmailAddress]
        public string Email { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }
    }
}
