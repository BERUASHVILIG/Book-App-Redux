import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./TopNavigation.scss";
import { loadAllBooks } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AppDispatch } from "../redux/store";

function TopNavigation() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favourites = useAppSelector((state) => state.favouritesBooks);

  const location = useLocation();

  const isActive = (pathname: any) => {
    return location.pathname === pathname ? "active-link" : "";
  };

  useEffect(() => {
    dispatch(loadAllBooks());
  }, []);

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="navigation-wrapper">
      <header>
        <h1 style={{ cursor: "pointer" }} onClick={navigateHome}>
          Book Store
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/favourites" className={isActive("/favourites")}>
                Favourites{" "}
                <span className="favourite-book-count">
                  {favourites.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div></div>
      </header>
    </div>
  );
}

export default TopNavigation;
