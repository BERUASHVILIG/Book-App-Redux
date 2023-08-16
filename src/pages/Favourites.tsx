import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import Like from "../components/Like";
import { updateFavourites } from "../redux/actions";

const Favourites = () => {
  const favourites = useAppSelector((state) => state.favouritesBooks);

  const dispatch = useAppDispatch();

  return (
    <div>
      {favourites.length === 0 ? (
        <h1 style={{ marginTop: "50px" }}>There are no favourite books</h1>
      ) : (
        favourites.map((book) => (
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
                isFavourite={true} // Since you are iterating over favourites, each book is a favorite
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
