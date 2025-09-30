using Microsoft.AspNetCore.Mvc;

namespace InnovaAI.Web.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        public IActionResult MelhoresIdeias()
        {
            return View();
        }
    }
}