import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateFavourites } from "../redux/actions";
import Like from "./Like";
import { Link } from "react-router-dom";
import "./BookItem.scss";

type BookProps = { book: BookItem };

const BookItem: React.FC<BookProps> = ({ book }) => {
  const { favouritesBooks }: GlobalState = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const isFoundBook = favouritesBooks.find((book) => book.id === book.id);
  return (
    <Box>
      <article className="article">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
        <div>
          <h2>
            <span>Title: </span>
            {book.volumeInfo.title}
          </h2>
          {/* <h3>
            <span>Author:</span>
            {book.volumeInfo.author}
          </h3> */}
          <h3>
            <span>Book Genre: </span>
            {book.volumeInfo.publisher}
          </h3>
        </div>
        <section>{/* <p>{book.searchInfo.textSnippet}</p> */}</section>
        <Like
          isFavourite={!!isFoundBook}
          onClick={() => dispatch(updateFavourites(book))}
        />
        <p className="readmore">
          <Link
            style={{
              color: "#fff",
              display: "flex",
              justifyContent: "flex-end",
            }}
            to={`/detail/${book.id}`}
          >
            Read More
          </Link>
        </p>
      </article>{" "}
    </Box>
  );
};

export default BookItem;
