import { ACTIONS } from "./actionTypes";
import { SAVE_BOOKS, SAVE_DETAIL, UPDATE_FAVOURITES } from "./actions";

const defaultState: GlobalState = {
  books: [],
  favouritesBooks: [],
  book: null,
};

const reducer = (state = defaultState, action: ACTIONS) => {
  switch (action.type) {
    case SAVE_BOOKS:
      return { ...state, books: action.books };
    case UPDATE_FAVOURITES:
      const isFound = state.favouritesBooks.find(
        (book) => book.id === action.book.id
      );
      if (isFound) {
        const newFavourites = state.favouritesBooks.filter(
          (book) => book.id !== action.book.id
        );
        return { ...state, favouritesBooks: newFavourites };
      }
      return {
        ...state,
        favouritesBooks: [...state.favouritesBooks, action.book],
      };
    case SAVE_DETAIL:
      return { ...state, book: action.book };
    default:
      return state;
  }
};

export default reducer;
