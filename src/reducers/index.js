import { BookListActions } from '../actions'

export default function BookListApp(state = [], action) {
    switch (action.type) {
        case BookListActions.SELECT_BOOK:
            return action.payload
        default:
            return state
    }
}