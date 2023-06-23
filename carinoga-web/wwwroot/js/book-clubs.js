let previous = document.getElementById("btn-previous");
let next = document.getElementById("btn-next");

let gallery = document.getElementById("image-gallery");
let pageIndicator = document.getElementById("page");

let galleryDots = document.getElementById("gallery-dots");
let imageGallery = document.querySelector("#image-gallery");

let imageJson = JSON.parse(imageGallery.dataset.galleryitems);
let gallerySize = imageJson.images.length;

let img = document.getElementById("current-bookclub");
let imgQuery = document.querySelector("#current-bookclub");

let imgIndex = imgQuery.dataset.index;

next.addEventListener("click", nextBookClub);
previous.addEventListener("click", prevBookClub);

function nextBookClub() {
    imgIndex = ++imgQuery.dataset.index;
    disableOrEnableGalleryNavigation();
    setFileSource();
}

function prevBookClub() {
    imgIndex = --imgQuery.dataset.index;
    disableOrEnableGalleryNavigation();
    setFileSource();
}

function setFileSource() {
    let file = imageJson.images[imgIndex].fileName;
    img.src = `./images/${file}`;
}

function disableOrEnableGalleryNavigation() {
    previous.disabled = imgIndex === 0;
    next.disabled = imgIndex === gallerySize;
}