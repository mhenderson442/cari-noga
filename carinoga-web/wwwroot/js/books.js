let books = document.getElementsByClassName("books");

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        showSelectedArticle("orphan-daughter");
    }
}

Array.from(books).forEach(bookNavigationClickEvent);

function bookNavigationClickEvent(element) {
    document.getElementById(element.id).addEventListener(
        "click",
        () => {
            hideAllBooksArticles();
            showSelectedArticle(element.id);;
        }
    );
}
function hideAllBooksArticles() {
    Array.from(books).forEach((book) => {
        document.getElementById(`${book.id}-article`).hidden = true;
    });
}

function showSelectedArticle(id) {
    let bookId = `${id}-article`;
    document.getElementById(bookId).hidden = false;
};