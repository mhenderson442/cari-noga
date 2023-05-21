let previous = document.getElementById("btn-previous");
let next = document.getElementById("btn-next");
let gallery = document.getElementById("image-gallery");
let pageIndicator = document.getElementById("page");
let galleryDots = document.getElementById("gallery-dots");

let images = [];

for (var i = 0; i < 36; i++) {
    images.push({
        title: `Image ${(i + 1)}`,
        source: "./images/book-club"
    });
}