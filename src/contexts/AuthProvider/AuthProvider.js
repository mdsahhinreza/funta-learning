import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleModeToggole = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      storeModeData(false);
    } else {
      setIsDarkMode(true);
      storeModeData(true);
    }
  };

  //   Load Previous darkmood data from localstorage
  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(JSON.parse(storedMode));
  }, []);

  //   Store DarkMood Data to localStorage
  const storeModeData = (val) => {
    localStorage.setItem("isDarkMode", val);
  };

  const authInfo = { isDarkMode, handleModeToggole, createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
