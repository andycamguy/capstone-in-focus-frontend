import React from 'react';

const Header = () => {
  return (
    <header className="header bg-dark text-light py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="app-name h3 m-0">In-Focus</h1>
        <button className="teach-me-button btn btn-warning">Teach Me</button>
      </div>
    </header>
  );
};

export default Header;