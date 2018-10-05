import React from 'react';
import './search-bar.css';

const SearchBar = (props) => {

  const onInputChange = (e) => {
    e.preventDefault();
    props.projectSearch(e.target.value);
  }

  return (
    <input onChange={event => onInputChange(event)} type="search" placeholder="Search by Project Name" />
  );
}

export default SearchBar;
