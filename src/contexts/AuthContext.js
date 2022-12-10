import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    isAuth: false,
  });
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const signupWithEmailPwd = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginWithEmailPwd = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => auth.signOut();

  // Login With Google
  const loginWithGoogle = () => signInWithPopup(auth, provider);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("user: ", user);
      let isAuth = false;
      if (user?.accessToken || user?.refreshToken) {
        isAuth = true;
      }
      setCurrentUser({ isAuth, ...user });
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUser.isAuth) {
      history.push("/dashboard");
    }
  }, [currentUser]);

  const value = {
    currentUser,
    loginWithEmailPwd,
    loginWithGoogle,
    signupWithEmailPwd,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
