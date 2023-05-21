using CariNoga.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json;

namespace CariNoga.Web.Pages;

public class BookClubsModel : PageModel
{
    public IList<BookClubGalleryItem> BookClubGalleryItems { get; set; } = default!;

    public IActionResult OnGet()
    {
        var json = System.IO.File.ReadAllText("Data/book-clubs.json");
        var images = JsonSerializer.Deserialize<BookClubGalleryItems>(json);

        BookClubGalleryItems = images?.Items!;

        return Page();
    }
}