import React from "react";

function Header() {
  return (
    <header className="header">

      <div className="logo">
         E-Commerce Dashboard
      </div>

      <div className="user-section">
        <span>Admin</span>

        <button className="btn btn-danger">
          Logout
        </button>
      </div>

    </header>
  );
}

export default Header;