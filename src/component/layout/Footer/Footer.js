import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/allevents">Events</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile Page</Link></li>
            <li ><Link to="/termsandconditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: abhivyakti@iiitn.ac.in</p>
          <p>Phone: +91 9969696969</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected on social media for updates and highlights!</p>
          <div className="social-icons">
            <Link to="https://www.facebook.com/examplefest" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i>
            </Link>
            <Link to="https://twitter.com/examplefest" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square"></i>
            </Link>
            <Link to="https://www.instagram.com/examplefest" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram-square"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Abhivyakti@IITN. All rights reserved.</p>
        <p>
          Developed and Managed by
          <Link to="https://www.example.com" target="_blank" rel="noopener noreferrer">
            __students
          </Link>
        </p>
      </div>
    </div>





    // <footer>
    //   <div className="footer">
    //     <div className="footer__left">
    //       <div className="footer__menu">
    //         <a href="/" className="footer__menu__item">
    //           home
    //         </a>
    //         <a href="/products" className="footer__menu__item">
    //           shop
    //         </a>
    //         <a href="./community/community.html" className="footer__menu__item">
    //           community
    //         </a>
    //         <a href="/" className="footer__menu__item">
    //           contact us
    //         </a>
    //         <a href="/login" className="footer__menu__item">
    //           login
    //         </a>
    //       </div>
    //       <div className="footer__icons">
    //         <i className="fa-brands fa-instagram" />
    //         <i className="fa-regular fa-envelope" />
    //       </div>
    //       <div className="footer__menu">
    //         <a href="/terms" className="footer__menu__item">
    //           terms and conditions
    //         </a>
    //         <a href="/return" className="footer__menu__item">
    //           shiping and return
    //         </a>
    //       </div>
    //     </div>
    //     <div className="footer__right">
    //       <h3>what does it mean to feel prickly</h3>
    //       <div className="footer__text">
    //         feeling irritated, happy, sad or simply feeling can be overwhelming
    //         and we get it. we don't just sell products, our art is a coping
    //         mechanism when you need one and a source to pass time when you don't.
    //         welcome to the prickly family- here we give each other a reason to
    //         believe in our art, and hope that we can all heal together, let art
    //         heal you. let the art heal everyone.
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
