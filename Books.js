class Book {
    constructor (
        Title,
        Author,
        ISBN,
        numCopies
    ) {
        this.Title = Title;
        this.Author = Author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    };
}
//methods
getAvailability = () => {
    if (numCopies === 0) {
        return "out of stock";
    } else if (numCopies < 10) {
        return "low stock";
    } else {
        return "in stock";
    }
}

export default Book;