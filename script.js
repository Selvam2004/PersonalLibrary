function newbook(title, author, yearPublished, readstatus) {
  return {
    title,
    author,
    yearPublished,
    readstatus,
    toggleRead() {
      readstatus = !readstatus;
    },
    getSummary() {
      return (
        "Title : " +
        title +
        "<br>Author : " +
        author +
        "<br>YearPublished : " +
        yearPublished +
        "<br>Readstatus : " +
        readstatus
      );
    },
  };
}

var library = [];

function addBookToFront() {
  let bookname = document.getElementById("addbooktitle").value;
  let author = document.getElementById("addauthor").value;
  let year = document.getElementById("addstatus").value;
  let book = newbook(bookname, author, year, "false");
  library.push(book);
  let cd = document.createElement("div");
  cd.classList.add("card");
  cd.classList.add("mb-3");
  let row = document.createElement("div");
  row.classList.add("row");
  let col1 = document.createElement("div");
  col1.classList.add("col-md-4");
  col1.classList.add("card-header");
  let img = document.createElement("img");
  img.src = "download.jpg";
  img.classList.add("h-100");
  col1.appendChild(img);
  let col2 = document.createElement("div");
  col2.classList.add("col-md-8");
  col2.classList.add("card-body");
  let title = document.createElement("div");
  title.classList.add("card-title");
  title.innerHTML = bookname;
  let content = document.createElement("div");
  content.classList.add("card-text");
  let cnt = book.getSummary();
  content.innerHTML = cnt;
  col2.append(title);
  col2.append(content);
  row.appendChild(col1);
  row.appendChild(col2);
  cd.append(row);
  document.getElementById("bk").appendChild(cd);
}
function getAllTitles() {
  let books = library.map((value) => value.title);
  alert(`${books} are available`);
}
function getBooksByAuthor() {
  let author = document.getElementById("getbook").value;
  console.log(author);
  let books = library
    .filter((value) => value.author == author)
    .map((value) => value.title);
  console.log(books);
  alert(`${books} books are available `);
}
function getTotalBooksPublishedBefore() {
  let year = document.getElementById("getbookyear").value;
  console.log(year);
  let bks = library
    .filter((value) => {
      if (value.yearPublished < year) {
        return value;
      }
    })
    .reduce((acc) => (acc += 1), 0);
  console.log(bks);
  alert(`${bks} books released before ${this.year}`);
}
function getBooksByReadStatus() {
  let readstatus = document.getElementById("getbookstatus").value;
  console.log(readstatus);
  let books = library
    .filter((value) => value.readstatus == readstatus)
    .map((value) => value.title);
  console.log(books);
  alert(`${books} books are available`);
}
function getSubLibrary() {
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let books = library.slice(start, end).map((value) => value.title);
  alert(`${books} books are available`);
}
function removeBookByTitle(title) {
  let bk = document.getElementById("rmtitle").value;
  let rmbk = library.map((value) => value.title).indexOf(bk);
  library.splice(rmbk, 1);
  let remover = document.getElementById("bk");
  remover.removeChild(remover.children[rmbk]);
  console.log(rmbk);
  console.log(library);
}
function removeFirstBook() {
  let remover = document.getElementById("bk");
  remover.removeChild(remover.firstChild);
  library.shift();
}
function removeLastBook() {
  let remover = document.getElementById("bk");
  remover.removeChild(remover.lastChild);
  library.pop();
}
function login() {
  if (
    document.getElementById("un").value == "selvam" &&
    document.getElementById("pwd").value == "selvam"
  ) {
    document.getElementById("cn").style.display = "none";
    document.getElementById("cnt").style.display = "block";
  } else {
    alert("Invalid Username or password");
    document.getElementById("lgn").style.display = "block";
    document.getElementById("cnt").style.display = "none";
  }
}
