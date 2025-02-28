
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
