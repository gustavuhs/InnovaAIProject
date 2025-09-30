using Microsoft.AspNetCore.Mvc;

namespace InnovaAI.Web.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string username, string password)
        {
            if (!string.IsNullOrEmpty(username) && !string.IsNullOrEmpty(password))
            {
                bool isEmail = username.Contains("@");
                
                var mockUsers = new Dictionary<string, string>
                {
                    { "usuario@teste.com", "usuario" },
                    { "admin@teste.com", "admin" },
                    { "usuario", "usuario" },
                    { "admin", "admin" }
                };
                
                if ((isEmail && mockUsers.ContainsKey(username)) || 
                    (!isEmail && mockUsers.Values.Contains(username)))
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            
            ViewBag.Error = "Usuário ou senha inválidos";
            return View();
        }

        public IActionResult CadastroPerfil()
        {
            return View();
        }
    }
}