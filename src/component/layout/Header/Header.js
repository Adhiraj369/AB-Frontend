import { Link } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from 'react'
// import {useNavigate} from 'react-router-dom';
// import "../css/mainPage.css"
// import Svg from './SVG';
// import logo from "../assets/EventPageAsst/logoPlaceHolder.svg"
// import LogoComponent from './LogoComponent';

const Header = () => {

  return (<>
    <>

      <header className="main-header">
        <marquee className="note">
          new notepads waiting for you to not(e)ice them!
        </marquee>

        <ul className="nav-bar">
          <li className="main-header__pricks">pricklybypb</li>
          <input type="checkbox" id="check" />
          <span className="main-nav__items">
            <li className="main-nav__item">
              <a href="/">home</a>
            </li>
            <li className="main-nav__item">
              <a href="/products" className="shop">
                shop
              </a>
            </li>
            <li className="main-nav__item">
              <a href="/about">community</a>
            </li>

            <li className="main-nav__item">
              <a href="/account">my account</a>
            </li>
            <li className="main-nav__item">
              <a href="/cart">
                <img src="../pimages/cart__img.png" alt="" className="cart__icon" />
              </a>
            </li>
            <label htmlFor="check" className="close-menu">
              <i className="fa-solid fa-chevron-right"></i>
            </label>
          </span>
          <label htmlFor="check" className="open-menu">
            <i className="fas fa-bars" />
          </label>
        </ul>

      </header>


    </>
  </>)
};

export default Header;
