using Microsoft.AspNetCore.Mvc;

namespace InnovaAI.Web.Controllers
{
    public class ProfileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CompletePerfil()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SaveProfile()
        {
            return RedirectToAction("Index", "Dashboard");
        }
    }
}