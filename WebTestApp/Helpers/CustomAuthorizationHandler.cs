using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebTestApp.BLL.Components.UserComponents.Entities;
using WebTestApp.BLL.Database;

namespace WebTestApp.Helpers
{
    public class CustomAuthorizationHandler : IAuthorizationHandler
    {
        public async Task HandleAsync(AuthorizationHandlerContext context)
        {
            var applicationDbContext = (ApplicationDbContext)((AuthorizationFilterContext)context.Resource).HttpContext.RequestServices.GetService(typeof(ApplicationDbContext));
            var userManager = (UserManager<ApplicationUser>)((AuthorizationFilterContext)context.Resource).HttpContext.RequestServices.GetService(typeof(UserManager<ApplicationUser>));
            var userIdentifier = context.User.FindFirst(x => x.Type == ClaimTypes.NameIdentifier);
            var userEmail = context.User.FindFirst(x => x.Type == ClaimTypes.Email);
            if (userIdentifier == null || userEmail == null)
            {
                context.Fail();
                return;
            }
            var userId = userIdentifier.Value;
            var email = userEmail.Value;
            var user = await applicationDbContext.Users.SingleOrDefaultAsync(x => x.Id == userId);
            if (user == null)
            {
                context.Fail();
                return;
            }
            else
            {
                context.Succeed(context.Requirements.FirstOrDefault());
            }
        }
    }
}
