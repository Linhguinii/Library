let myLibrary = []

function Book(title, author, pages, read) {
 this.title = title
 this.author = author 
 this.pages = pages
 this.read = read
 this.info= function(){
  console.log(this.info())
  return title + author + pages + read
}

function addBookToLibrary(book){
  // takes user input and store new book objects into an array
  myLibrary.push(book)
}
