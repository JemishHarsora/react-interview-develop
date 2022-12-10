import React, { Component, useEffect, useRef, useState } from "react";
import { Link, useHistory, useParams, withRouter } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
  // States & Constants
  const { currentUser } = useAuth();
  const [menuState, setMenuState] = useState({});
  const [states, setStates] = useState({});
  const history = useHistory();
  const prevHistory = useRef(history);

  // Life cycle methods
  useEffect(() => {
    onRouteChanged();
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });

      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }, []);

  useEffect(() => {
    if (history.location !== prevHistory.current.location) {
      onRouteChanged();
    }
  }, [history]);

  // Event methods
  const isPathActive = (path) => history.location.pathname.startsWith(path);

  const toggleMenuState = (menuState) => {
    if (menuState) {
      setMenuState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      setMenuState({ [menuState]: true });
    } else {
      Object.keys(states).forEach((i) => {
        setMenuState({ [i]: false });
      });
      setMenuState({ [menuState]: true });
    }
  };

  const onRouteChanged = () => {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(states).forEach((i) => {
      setStates({ [i]: false });
    });

    const dropdownPaths = [{ path: "/apps", state: "appsMenuOpen" }];

    dropdownPaths.forEach((obj) => {
      if (isPathActive(obj.path)) {
        setStates({ [obj.state]: true });
      }
    });
  };

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="index.html">
          <i className="mdi mdi-blur"></i>LOGO
        </a>
        <a className="sidebar-brand brand-logo-mini" href="index.html">
          <i className="mdi mdi-blur"></i>
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <img
                  className="img-xs rounded-circle "
                  src={
                    currentUser.photoURL ||
                    require("../assets/images/faces/face1.jpg")
                  }
                  alt="profile"
                />
                <span className="count bg-success"></span>
              </div>
              <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">
                  {currentUser.displayName || currentUser.email || "John deo"}
                </h5>
                <span>Gold Member</span>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item nav-category">
          <span className="nav-link">Navigation</span>
        </li>
        <li
          className={
            isPathActive("/dashboard")
              ? "nav-item menu-items active"
              : "nav-item menu-items"
          }
        >
          <Link className="nav-link" to="/dashboard">
            <span className="menu-icon">
              <i className="mdi mdi-speedometer"></i>
            </span>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li
          className={
            isPathActive("/products")
              ? "nav-item menu-items active"
              : "nav-item menu-items"
          }
        >
          <Link className="nav-link" to="/products">
            <span className="menu-icon">
              <i className="mdi mdi-contacts"></i>
            </span>
            <span className="menu-title">Products</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
