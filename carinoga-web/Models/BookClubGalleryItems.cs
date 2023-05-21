using System.Text.Json.Serialization;

namespace CariNoga.Web.Models;

public record BookClubGalleryItems
{
    [JsonPropertyName("images")]
    public IList<BookClubGalleryItem> Items { get; init; } = default!;
}