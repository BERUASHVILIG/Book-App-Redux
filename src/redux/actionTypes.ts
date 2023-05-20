import { SAVE_BOOKS, SAVE_DETAIL, UPDATE_FAVOURITES } from "./actions";

export type SAVE_BOOKS_ACTION = {
  type: typeof SAVE_BOOKS;
  books: BookItem[];
};

export type UPDATE_FAVOURITES_ACTION = {
  type: typeof UPDATE_FAVOURITES;
  book: BookItem;
};

export type SAVE_DETAIL_ACTION = {
  type: typeof SAVE_DETAIL;
  book: BookItem;
};
export type ACTIONS =
  | SAVE_BOOKS_ACTION
  | UPDATE_FAVOURITES_ACTION
  | SAVE_DETAIL_ACTION;
