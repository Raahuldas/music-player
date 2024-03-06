import React, { useContext } from "react";
import { IoMdMusicalNotes } from "react-icons/io";
import { Link } from "react-router-dom";
import { Context } from "../store/Context";

function Header() {
  const { searchElement, handleSearch} = useContext(Context);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <IoMdMusicalNotes /> r-Music
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="library">
                Library
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lyrics">
                Lyrics
              </Link>
            </li>
            <li className="nav-item" >
              <div className="nav-link" href="#">
                Account
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={(e)=>handleSearch(e)}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={searchElement}
            />
            <button className="btn btn-outline-success" type="submit" >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
