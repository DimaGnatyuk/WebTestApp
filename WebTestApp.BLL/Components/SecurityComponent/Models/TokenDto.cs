using System;
using System.Collections.Generic;
using System.Text;

namespace WebTestApp.BLL.Components.SecurityComponent.Models
{
    public class TokenDto
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }
}
