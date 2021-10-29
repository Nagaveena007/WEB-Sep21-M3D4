window.onload = () => {
  getBooks();
};
let books = [];

let shoppingCartList = [];

let filteredBooks = [];

const getBooks = (books) => {
  fetch("https://striveschool-api.herokuapp.com/books", {})
    .then((jsonData) => {
      console.log(jsonData);
      return jsonData.json();
    })
    .then((body) => {
      // DOM MANIPULATION
      console.log(body);
      const row = document.querySelector(".album .row");
      console.log(Boolean(0 < body.length));

      row.innerHTML = ""; //removing the images from the row by appending ""

      for (let i = 0; i < body.length; i++) {
        const book = body[i];
        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
          <div class="card mb-4 shadow-sm  mt-4">
  <img src="${book.img}" class="img-card">
  <div class="card-body">
  <div class="w-100">    
       <h5 class="card-text">
        ${book.title}
        </h5>
      </div>
      <small class="">${book.category}</small>

    <div
      class="d-flex justify-content-between align-items-center"
    >
    
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary bg-success text-dark"
          onclick="addBook(event)"
          data-bs-toggle="modal" data-bs-target="#exampleModal"
        >
        ${"$ " + book.price}
        </button>
        <button
          type="button" id="hide" onclick="skipBook(event)"
          class="btn btn-sm btn-outline-secondary bg-primary"
        >
          skip >>>
        </button>
      </div>
    </div>
  </div>
  </div>
  </div>`;

        row.appendChild(col);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}; // end of Books

const skipBook = (e) => {
  e.target.closest(".col-md-4").remove();
};

const addBook = (e) => {};

//Search bar
function search(query) {
  if (query.length < 3) return;
  filteredBooks = books.filter((body) =>
    body.title.toLowerCase().includes(query.toLowerCase)
  );
  getBooks(filteredBooks);
}
