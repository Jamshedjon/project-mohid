import "./Hero.css";
import { useState } from "react";
import ListItem from "./components/ListItem";
function Hero() {
  return (
    <div className="hero">
      <header className="header">
        <div className="container header__wrapper">
          <a href="#" className="header-logo__link">
            <img src="./header-logo.svg" alt="" className="header-logo" />
            <p className="header-logo__text">Mohid</p>
          </a>
          <ul className="site-nav__list">
            <ListItem title="Home" />
            <ListItem title="Brands" />
            <ListItem title="Recent Products" />
            <ListItem title="Contact" />
            <ListItem title="About" />
          </ul>
          <div className="header__options">
            <a href="" className="header__options-link">
              <img
                src="./header-search-icon.svg"
                alt=""
                className="header__options-icon"
                width="22"
                height="23"
              />
            </a>
            <a href="" className="header__options-link">
              <img
                src="./header-person-icon.svg"
                alt=""
                className="header__options-icon"
                width="22"
                height="23"
              />
            </a>
            <a href="" className="header__options-link-shopping-cart-icon">
              <img
                src="./header-shopping-cart-icon.svg"
                alt=""
                className="header__options-shopping-cart-icon"
                width="22"
                height="23"
              />
            </a>
          </div>
        </div>
      </header>

      <section className="discover">
        <div className="container discover__wrapper">
          <div className="discover__info-wrapper">
            <h1 className="discover__info-title">
              Discover Most Suitable Watches
            </h1>
            <p className="discover__info-text">
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <div className="discover__info-find">
              <img
                src="./discover-search-icon.svg"
                alt=""
                className="find-icon"
              />
              <input type="text" placeholder="Find the best brands" />
              <a href="" className="discover__search-button">
                Search
              </a>
            </div>
          </div>
          <div className="discover__info-img">
            <img src="./discover.png" alt="watch" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
