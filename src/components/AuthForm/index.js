import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebase";

const AuthForm = ({ formName }) => {
  // States & constants
  const isLoginForm = formName !== "" && formName === "login";
  const { signupWithEmailPwd, loginWithEmailPwd, loginWithGoogle } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Life cycle methods
  useEffect(() => {
    console.log("re", formName);
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
      signupWithEmailPwd(email, password).then((res) => {
        history.push("/dashboard");
      });
    }
    if (history.location.pathname === "/login") {
      loginWithEmailPwd(email, password).then((res) => {
        history.push("/dashboard");
      });
    }
  };
  return (
    <form className="pt-3">
      <div className="form-group">
        <input
          name="email"
          type="email"
          className="form-control form-control-lg"
          id="exampleInputEmail1"
          placeholder="Email"
          onChange={handleInputChangeEvt}
        />
      </div>
      <div className="form-group">
        <input
          name="pwd"
          type="password"
          className="form-control form-control-lg"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleInputChangeEvt}
        />
      </div>
      <div className="mb-4">
        <div className="form-check">
          <label className="form-check-label text-muted">
            <input type="checkbox" className="form-check-input" />
            <i className="input-helper"></i>I agree to all Terms & Conditions
          </label>
        </div>
      </div>

      <div className="mt-3 mb-2">
        <button
          className="btn btn-outline-secondary btn-lg btn-block font-weight-medium auth-form-btn"
          onClick={(e) => handleSubmit(e)}
        >
          {isLoginForm ? "SIGN IN" : "SIGN UP"}
        </button>
      </div>

      {isLoginForm ? (
        <div className="mt-3 mb-2">
          <button
            type="button"
            onClick={loginWithGoogle}
            className="btn btn-outline-secondary btn-lg btn-block font-weight-medium auth-form-btn"
          >
            <i className="mdi mdi-google mr-2"></i>Connect Using Google
          </button>
        </div>
      ) : (
        <div />
      )}
      <div className="text-center mt-4 font-weight-light">
        {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
        <Link
          to={`${isLoginForm ? "/register" : "/login"}`}
          className="text-primary"
        >
          {!isLoginForm ? "Login" : "Create"}{" "}
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
