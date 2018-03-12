class BookData {
    constructor () {
        this.data = [{
            title: "Javascript - The Good Parts",
            pages: 153
        },{
            title: "Harry Potter and the Philosopher's Stone",
            pages: 224
        },{
            title: "The Dark Tower",
            pages: 340
        },{
            title: "Eloquent Ruby",
            pages: 448
        }];
    }

    getBooksByTitle(title) {
        const result = this.data.filter((book) => book.title === title);
        return (result.length === 0 ? null : result[0]);
    }

    getAllBooks() {
        return this.data;
    }
}

export default BookData;

