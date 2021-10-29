const booksWrapper = document.querySelector("#books-wrapper");

const shoppingCart = document.querySelector("#cart");
window.onload = () => {
  loadBooks();
};
let books = [];

let shoppingCartList = [];

let filteredBooks = [];

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((_books) => {
    books = _books;
    displayBooks();
  })
  .catch((error) => {
    console.log(error.message);
  });

function displayBooks() {
  books.forEach((book) => {
    booksWrapper.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
       <div class="card">
         <img src="${book.img}" class="img-card card-img" >
            <div class="card-body">    
                <h5 class="card-text">${book.title}</h5>
                <small class="card-text">${book.category}</small>
                <button type="button" class="btn btn-sm btn-outline-secondary bg-success text-dark" 
                 onclick="addToCart('${book.asin}')">
                  ${"$ " + book.price} </button>   
            </div>
        </div>
    </div>`;
  });
}
function addToCart(asin) {
  const book = books.find((book) => book.asin == asin);
  shoppingCartList.push(book);
  refreshShoppingCart();
}
function refreshShoppingCart() {
  shoppingCart.innerHTML = "";
  shoppingCartList.forEach((book) => {
    shoppingCart.innerHTML += `
    <div class="shopping-item">
      <div> ${book.title}</div>
      <div> ${book.price}</div>
    </div>
    `;
  });
}
