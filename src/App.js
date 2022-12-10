import React, { useEffect, useRef, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./router";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import Footer from "./shared/Footer";
import { useAuth } from "./contexts/AuthContext";

const AppMain = (props) => {
  const history = useHistory();
  const { currentUser } = useAuth();

  const historyRef = useRef(history);
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);

  useEffect(() => {
    onRouteChanged();
  }, []);

  useEffect(() => {
    if (historyRef.current.location.pathname !== history.location.pathname) {
      onRouteChanged();
    }
  }, [history]);

  const onRouteChanged = () => {
    if (
      history.location.pathname === "/login" ||
      history.location.pathname === "/register"
    ) {
      setIsFullPageLayout(true);
    }
  };

  let navbarComponent =
    !isFullPageLayout && currentUser.isAuth ? <Navbar /> : "";
  console.log("currentUser: ", currentUser);
  let sidebarComponent =
    !isFullPageLayout && currentUser.isAuth ? <Sidebar /> : "";
  let footerComponent =
    !isFullPageLayout && currentUser.isAuth ? <Footer /> : "";

  return (
    <div className="container-scroller">
      {sidebarComponent}
      <div className="container-fluid page-body-wrapper">
        {navbarComponent}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
          </div>
          {footerComponent}
        </div>
      </div>
    </div>
  );
};

export default withRouter(AppMain);
