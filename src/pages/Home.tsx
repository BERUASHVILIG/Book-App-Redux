import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import BookItem from "../components/BookItem";
import { Paper, CircularProgress } from "@mui/material"; // Import CircularProgress from MUI
import useDebounce from "../utils/hooks";
import notFound from "../images/notFounBook.png";
import "./Home.scss";

function Home() {
  const { books }: GlobalState = useAppSelector((state) => state);
  const [search, setSearch] = useState("");

  const debouncedValue = useDebounce<string>(search, 2000);

  const filterBooks = books.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange} // Update to use handleSearchChange
        />
        {search && <CircularProgress size={20} />}{" "}
        {/* Show loader when search is not empty */}
      </div>

      <div className="books-container">
        {filterBooks.length === 0 ? (
          <p className="">
            No results found
            <img src={notFound} alt="" />
          </p> // Display message when no results
        ) : (
          filterBooks.map((book) => (
            <Paper
              sx={{ padding: "15px", backgroundColor: "#3a4877" }}
              key={book.id}
            >
              <BookItem book={book} />
            </Paper>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
