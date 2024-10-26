/**
 * Header component
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a style={{color:"blue",fontFamily:"sans-serif"}} href="#home"><b>Home</b></a>
      <a style={{color:"blue",fontFamily:"sans-serif"}} href="#about"><b>About</b></a>
      <a style={{color:"blue",fontFamily:"sans-serif"}} href="#portfolio"><b>Portfolio</b></a>
      <a style={{color:"blue",fontFamily:"sans-serif"}} href="#footer"><b>Contact</b></a>
    </div>
  );
};

export default Header;
