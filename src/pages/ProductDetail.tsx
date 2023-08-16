import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadSingleBook } from "../redux/actions";
import { useParams, useNavigate, Link } from "react-router-dom";

import "./ProductDetail.scss";

const ProductDeatail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.book);

  useEffect(() => {
    dispatch(loadSingleBook(id as string));
  }, [id]);

  const returnHome = () => {
    navigate("/");
  };
  return (
    <div className="book-container">
      <div className="book-info">
        <button className="back-btn" onClick={returnHome}>
          Return Home
        </button>
        <img src={book?.volumeInfo.imageLinks.thumbnail} alt="" />
        <p>Publish Date: {book?.volumeInfo.publishedDate}</p>
        <p>Publisher: {book?.volumeInfo.publisher}</p>
      </div>
      <div>
        {" "}
        <h2>{book?.volumeInfo.title}</h2>
        <p>{book?.volumeInfo.description}</p>
      </div>
    </div>
  );
};

export default ProductDeatail;
