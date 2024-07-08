function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      return resp.json();
    })
    .then(json => renderBooks(json))
    .catch(error => {
      console.error("Failed to fetch books:", error);
      throw error;
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
