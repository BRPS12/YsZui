import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="school-info">
          <h3>Нийслэлийн СБД-ийн 1-р сургууль</h3>
          <p>Zza zalhu hurcle</p>
          <p>Mongolia, Ulaanbaatar</p>
          <p className="contact-info">
            Phone: <span>+976 9969 8416</span>
          </p>
        </div>

        <div className="social-media">
          <p>Follow Us:</p>
          <div className="social-icons">
            <SocialIcon url="https://www.facebook.com/bolderdene.boochko" />
            <SocialIcon
              url="https://www.instagram.com/yetiacademyy/?theme=dark"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} 11ё. All rights reserved.</p>
      </div>

      <div className="designer-info">
        <p>Сурагч Б.Болд-Эрдэнэ</p>
      </div>
    </footer>
  );
};
