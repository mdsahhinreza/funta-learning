import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const authInfo = { isDarkMode, handleModeToggole };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
