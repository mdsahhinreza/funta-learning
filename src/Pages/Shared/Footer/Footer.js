import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Footer = () => {
  const { isDarkMode } = useContext(AuthContext);
  return (
    <div
      className={` text-light text-center pt-3 pb-2 ${
        isDarkMode ? "bg-dark" : "funta-bg"
      }`}
    >
      <p>Funta-Learning &copy; 2022-2100</p>
    </div>
  );
};

export default Footer;
