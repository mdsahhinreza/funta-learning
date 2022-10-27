import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithSocial = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sendEmailVarifiacation = () => {
    sendEmailVarifiacation(auth.currentUser);
  };

  const logOut = () => {
    return signOut(auth);
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

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscrive();
    };
  }, []);

  //   Load Previous darkmood data from localstorage
  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(JSON.parse(storedMode));
  }, []);

  //   Store DarkMood Data to localStorage
  const storeModeData = (val) => {
    localStorage.setItem("isDarkMode", val);
  };

  const authInfo = {
    isDarkMode,
    handleModeToggole,
    createUser,
    updateUser,
    user,
    setUser,
    loading,
    setLoading,
    logIn,
    logOut,
    createUserWithSocial,
    sendEmailVarifiacation,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
