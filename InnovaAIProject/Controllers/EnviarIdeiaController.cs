using Microsoft.AspNetCore.Mvc;

namespace InnovaAI.Web.Controllers
{
    public class EnviarIdeiaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult MinhasIdeias()
        {
            return View();
        }
    }
}
