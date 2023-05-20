import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadSingleBook } from "../redux/actions";
import { useParams, useNavigate, Link } from "react-router-dom";

const ProductDeatail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.book);

  useEffect(() => {
    // const timer = setTimeout(() => {
    dispatch(loadSingleBook(id));
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [id]);

  const returnHome = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        margin: "80px auto",
        padding: "15px",
        gap: "15px",
        borderRadius: "8px",
        backgroundColor: "#383863",
      }}
    >
      <div>
        <button style={{}} onClick={returnHome}>
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
