import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import Like from "../components/Like";
import { updateFavourites } from "../redux/actions";

const Favourites = () => {
  const favourites = useAppSelector((state) => state.favouritesBooks);

  const { favouritesBooks }: GlobalState = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const isFoundBook = favouritesBooks.find((book) => book.id === book.id);

  return (
    <div>
      {favourites.length < 0 ? (
        <h1>there isn't favourite book</h1>
      ) : (
        Object.values(favourites).map((book) => (
          <div className="favourite-container" key={book.id}>
            <h1>{book.volumeInfo.title}</h1>
            <p>Publish Date: {book.volumeInfo.publishedDate}</p>
            <p>Publisher: {book.volumeInfo.publisher}</p>
            <div>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
              <Like
                isFavourite={!!isFoundBook}
                onClick={() => dispatch(updateFavourites(book))}
              />
              <Link style={{ color: "#fff" }} to={`/detail/${book.id}`}>
                Read More{" "}
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favourites;
