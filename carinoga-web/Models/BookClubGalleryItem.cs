using System.Text.Json.Serialization;

namespace CariNoga.Web.Models;

public record BookClubGalleryItem
{
    [JsonPropertyName("fileName")]
    public required string FileName { get; init; }

    [JsonPropertyName("caption")]
    public required string Caption { get; init; }
}