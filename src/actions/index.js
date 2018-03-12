export const BookListActions = {
    SELECT_BOOK: 'SELECT_BOOK'
}

export default function selectBook(book) {
    return {
        type : BookListActions.SELECT_BOOK,
        payload: book
    }
}