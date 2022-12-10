import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright ©{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="mdi mdi-blur"></i>LOGO{" "}
            </a>
            2022
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
