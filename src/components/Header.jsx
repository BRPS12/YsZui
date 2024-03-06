import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Image from "../Images/SMDP.jpg";

export const Header = ({ backgroundImage, title, isMounted }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuVisible(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <header
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            fontSize: "50px",
            color: "#fff",
            fontFamily: "Georgia, serif",
            textAlign: "center",
          }}
        >
          <div
            className={`header imported-blur-background ${
              isMounted ? "scroll-animation" : ""
            }`}
          >
            <h3 style={{ color: "#fff" }}>{title}</h3>
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/">
          <div
            className="logo"
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              top: "2%",
              left: "1%",
            }}
          >
            <img
              style={{ width: "100px", borderRadius: "20px" }}
              src={Image}
              alt="Yeti Logo"
            />
            <div
              style={{
                fontSize: "20px",
                fontFamily: "Georgia, serif",
                display: "flex",
                alignItems: "center",
                marginTop: "10%",
              }}
            >
              <div style={{ marginLeft: "10px", color: "#fff" }}>
                Ёс зүй нь хичээлийн
                <p style={{ textAlign: "center", marginTop: "-1px" }}>
                  бие даалт бөлгөө.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div
          className={`menu-button ${menuVisible ? "open" : ""}`}
          onClick={toggleMenu}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginRight: "20px",
            position: "absolute",
            backgroundColor: "#000",
            width: "10%",
            height: "10%",
            right: -20,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: "5px",
          }}
        >
          Цэс
        </div>
      </header>
      <div className={`overlay ${menuVisible ? "show" : ""}`}>
        <div className="menu">
          <div className="menu-header">
            <Link style={{ textDecoration: "none" }} to="/">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
              >
                <img
                  style={{ width: "100px", borderRadius: "20px" }}
                  src={Image}
                  alt="Yeti Logo"
                />
                <div
                  style={{
                    fontSize: "20px",
                    fontFamily: "Georgia, serif",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10%",
                  }}
                >
                  <div style={{ marginLeft: "10px", color: "#fff" }}>
                    Ёс зүй нь хичээлийн
                    <p style={{ textAlign: "center", marginTop: "-1px" }}>
                      бие даалт бөлгөө.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className={`menu-button close ${menuVisible ? "visible" : ""}`}
              onClick={toggleMenu}
            >
              <div
                className="circle-border"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="close-icon"
                  style={{ width: "16px", height: "16px", color: "#fff" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="custom-menu">
            <Link className="custom-menu-button" to="/">
              Нүүр хуудас
            </Link>
            <Link className="custom-menu-button" to="/exercises">
              Дасгал ажил
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
