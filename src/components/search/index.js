import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


// import useNavigate here.

const Search = () => {

  // get the navigate object here
  const navigate = useNavigate();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // imperatively redirect with navigate
    navigate(`/search?${searchQuery}`);

  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
