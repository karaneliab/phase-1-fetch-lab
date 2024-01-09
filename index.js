function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  
    .then((response) => response.json())
    
    .then((data) => { renderBooks(data);

    })
    .catch((error) => {
        console.log(error);
    });
  //  return fetch();
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML =`
  <div class ='books'>
     <h2> Title: ${book.name}</h2>
    
     <p> Number of Pages: ${book.numberOfPages}</p>
       <p> Author: ${book.authors.join(', ')}</p>
     <p> Publisher: ${book.publisher}<p>
     <p> Media Type: ${book.mediaType}</p>
     <p> ISBN: ${book.isbn}</p>
     </div>
     `;
    main.appendChild(h2);
  });
 
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  renderBooks();
});
