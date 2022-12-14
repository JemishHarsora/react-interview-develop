import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };
  console.log("currentUser.photoURL :", currentUser);
  return (
    <nav className="navbar p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo-mini" to="/">
          <i className="mdi mdi-blur"></i>
        </Link>
      </div>
      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <button
          className="navbar-toggler align-self-center"
          type="button"
          onClick={() => document.body.classList.toggle("sidebar-icon-only")}
        >
          <span className="mdi mdi-menu"></span>
        </button>
        <ul className="navbar-nav navbar-nav-right">
          <Dropdown alignRight as="li" className="nav-item border-left">
            <Dropdown.Toggle
              as="a"
              className="nav-link count-indicator cursor-pointer"
            >
              <i className="mdi mdi-bell"></i>
              <span className="count bg-danger"></span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
              <h6 className="p-3 mb-0">Notifications</h6>
              <Dropdown.Divider />
              <Dropdown.Item
                className="dropdown-item preview-item"
                onClick={(evt) => evt.preventDefault()}
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-calendar text-success"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Event today</p>
                  <p className="text-muted ellipsis mb-0">
                    Just a reminder that you have an event today
                  </p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <p className="p-3 mb-0 text-center">See all notifications</p>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown alignRight as="li" className="nav-item">
            <Dropdown.Toggle
              as="a"
              className="nav-link cursor-pointer no-caret"
            >
              <div className="navbar-profile">
                <img
                  className="img-xs rounded-circle"
                  src={
                    currentUser.photoURL ||
                    require("../assets/images/faces/face1.jpg")
                  }
                  alt="profile"
                />
                <p className="mb-0 d-none d-sm-block navbar-profile-name">
                  {currentUser.displayName || currentUser.email || "John deo"}
                </p>
                <i className="mdi mdi-menu-down d-none d-sm-block"></i>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
              <h6 className="p-3 mb-0">Profile</h6>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-settings text-success"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Settings</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => {
                  evt.preventDefault();
                  logout();
                }}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-logout text-danger"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Log Out</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="mdi mdi-format-line-spacing"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
