import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import AuthForm from "../../components/AuthForm";
const LoginScreen = () => {
  const history = useHistory();
  const { isAuth, loginWithGoogle } = useAuth();

  useEffect(() => {
    if (isAuth) {
      history.push("/dashboard");
    }
  }, [isAuth]);

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <i className="mdi mdi-blur"></i>LOGO
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <AuthForm formName="login"></AuthForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
