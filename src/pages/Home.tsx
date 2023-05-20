import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import BookItem from "../components/BookItem";
import { Paper } from "@mui/material";
import useDebounce from "../utils/hooks";
import "./Home.scss";

function Home() {
  const { books }: GlobalState = useAppSelector((state) => state);
  const [search, setSearch] = useState("");

  const debouncedValue = useDebounce<string>(search, 500);

  const filterBooks = books.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="books-container">
        {filterBooks.map((book) => {
          return (
            <Paper
              sx={{ padding: "15px", backgroundColor: "#3a4877" }}
              key={book.id}
            >
              <BookItem book={book} />
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
