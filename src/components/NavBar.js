import React from 'react';
import SearchBar from './SearchBar';
import './nav-bar.css';

const NavBar = (props) => {

  const logo = 'https://d3mlfyygrfdi2i.cloudfront.net/kickstarter-logo-color.png';

  return (
    <nav className="topnav">
      <div className="container">
        <div  className="block"></div>
        <div className="block">
          <a className="nav-brand"><img src={logo} alt="logo" /></a>
        </div>
        <div className="block">
          <SearchBar projectSearch={props.projectSearch} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
