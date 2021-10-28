window.onload = () => {
  getBooks();
};
const getBooks = () => {
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
          <div class="card mb-4 shadow-sm bgcolor mt-4">
  <img src="${book.img}" class="img-card">
  <div class="card-body">
    <p class="card-text">
    <title>${book.title}</title>
  
    </p>
    <div
      class="d-flex justify-content-between align-items-center"
    >
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary btnborder"
          onclick="addBook(event)"
          data-bs-toggle="modal" data-bs-target="#exampleModal"
        >
          Add
        </button>
        <button
          type="button" id="hide" onclick="skipBook(event)"
          class="btn btn-sm btn-outline-secondary btnborder"
        >
          skip
        </button>
      </div>
      <small class="text-white">${book.category}</small>
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
