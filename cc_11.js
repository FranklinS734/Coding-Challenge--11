
// Task 1: Creating a Book Class

class Book {
    constructor(title, author, isbn, copies) { // Creating a Book Class
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };
    getDetails(){ // Method to return book details as a formatted string
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; //returns a formatted string of book details
    };
    updateCopies(quantity){ // Method to update the number of copies
        this.copies += quantity; 
    };
};

//Test Case
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); //Creating a new book assigned to book1
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1); //Using updateCopies to modifiy the copies in stock
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 2 - Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) { 
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    };
    borrowBook(book){ // Method to add a book to the borrowed list
        this.borrowedBooks.push(book); //adds a book title to borrowedBooks
    };
    returnBook(book){   // Method to return a book (remove from borrowed list)
        let index = this.borrowedBooks.indexOf(book); //Finds the index of the book
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1); 
        } else {
            console.log(`The book "${book.title}" was not checked out by this borrower.`)
        };
    };
};

//Test Case 2
const borrower1 = new Borrower("Alice Johnson", 201); 
borrower1.borrowBook("The Great Gatsby"); 
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby"); 
console.log(borrower1.borrowedBooks);
// Expected output: []

// Task 3: Creating a Library Class
class Library {
    constructor(parameters) { 
        this.books = [];
        this.borrowers = [];
    };
    addBook(book) {  // Method to add a book to the library
        this.books.push(book); //Adds a new book to the library.
    };
    listBooks() { // Method to list all books with details
        this.books.forEach(book => { //Loops through books using forEach
            console.log(book.getDetails()); //Runs and logs getDetails() forEach book
        });
    };}

    // Test Case
    const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"