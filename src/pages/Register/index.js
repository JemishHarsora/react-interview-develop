import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebase";

const Register = (props) => {
  // States & constants
  const { signupWithEmailPwd, loginWithEmailPwd } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Life cycle methods
  useEffect(() => {
    console.log("re", props);
  }, []);
  // Event methods
  const handleInputChangeEvt = (evt) => {
    const { name, value } = evt.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "pwd") {
      setPassword(value);
    }
  };
  console.log();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (history.location.pathname === "/register") {
      signupWithEmailPwd(email, password);
    }
    if (history.location.pathname === "/login") {
      loginWithEmailPwd(email, password);
    }
  };
  return (
    <div>
      <div className="d-flex align-items-center auth px-0 h-100">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <i className="mdi mdi-blur"></i>LOGO
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">
                Signing up is easy. It only takes a few steps
              </h6>
              <AuthForm formName="register"></AuthForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
