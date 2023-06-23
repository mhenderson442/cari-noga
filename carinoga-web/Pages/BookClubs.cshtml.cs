using CariNoga.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json;

namespace CariNoga.Web.Pages;

public class BookClubsModel : PageModel
{
    public string BookClubGalleryItems { get; set; } = default!;

    public IActionResult OnGet()
    {
        var json = System.IO.File.ReadAllText("Data/book-clubs.json");
        BookClubGalleryItems = json;

        return Page();
    }
}