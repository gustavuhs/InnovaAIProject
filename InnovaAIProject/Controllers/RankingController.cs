using Microsoft.AspNetCore.Mvc;

namespace InnovaAI.Web.Controllers
{
    public class RankingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
