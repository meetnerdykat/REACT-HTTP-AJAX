import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className={icon} /> &nbsp; {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                List <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0 justify-content-center">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Friends',
  icon: 'fas fa-users'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
