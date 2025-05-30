enum BookStatus {
    Available,
    CheckedOut,
    Reserved
}

type Book = [string, string, number, BookStatus];

function borrowBook(book: Book): string {
    if (book[3] === BookStatus.Available) {
        book[3] = BookStatus.CheckedOut;
        return `You have successfully borrowed "${book[0]}".`;
    } else if (book[3] === BookStatus.CheckedOut) {
        return `Sorry, "${book[0]}" is already checked out.`;
    } else if (book[3] === BookStatus.Reserved) {
        return `Sorry, "${book[0]}" is reserved and cannot be borrowed.`;
    } else {
        return `Unknown status for the book "${book[0]}".`;
    }
}

let myBook: Book = ["The Alchemist", "Paulo Coelho", 1234567890, BookStatus.Available];

console.log(borrowBook(myBook));
console.log(borrowBook(myBook));
