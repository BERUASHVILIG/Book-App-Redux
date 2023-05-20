import ajax, { ajaxSingle } from "../axios/axiosAPI";
import {
  SAVE_BOOKS_ACTION,
  UPDATE_FAVOURITES_ACTION,
  SAVE_DETAIL_ACTION,
} from "../redux/actionTypes";
import { AppDispatch } from "./store";

export const SAVE_BOOKS = "SAVE_BOOKS";
export const UPDATE_FAVOURITES = "UPDATE_FAVOURITES";
export const SAVE_DETAIL = "SAVE_DETAIL";

export const saveBooks = (books: BookItem[]): SAVE_BOOKS_ACTION => ({
  type: SAVE_BOOKS,
  books,
});

export const updateFavourites = (book: BookItem): UPDATE_FAVOURITES_ACTION => ({
  type: UPDATE_FAVOURITES,
  book,
});

export const saveDetail = (book: BookItem): SAVE_DETAIL_ACTION => ({
  type: SAVE_DETAIL,
  book,
});

export const loadAllBooks = () => {
  return async (dispatch: Function) => {
    try {
      const booksPromise = ajax.get("");
      const data = await booksPromise;
      console.log(" data", data);
      // const totalItems = booksPromise.data.items.totalIt

      dispatch(saveBooks(data.data.items));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadSingleBook = (id: string) => {
  return async (dispatch: Function) => {
    try {
      const bookPromise = ajaxSingle.get(`/${id}`);
      const data = await bookPromise;

      console.log(data);
      dispatch(saveDetail(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};
