import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <React.Fragment>
      <div className=" position-sticky top-0 ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <NavLink className="navbar-brand text-white" to="/">React User</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <NavLink className="btn btn-outline-light" to="/users/addUsers">
                Add Users
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}
export default NavBar;