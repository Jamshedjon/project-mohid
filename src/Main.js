import "./Main.css";
import { useState } from "react";
import ProductTopItem from "./components/ProductTopItem";
import ProductBottomItem from "./components/ProductBottomItem";
import PersonItem from "./components/PersonItem";
import PersonSlider from "./components/PersonSlider";
function Main() {
  return (
    <main className="main">
      <section className="product">
        <div className="container product__wrapper">
          <div className="product__top">
            <ul className="product__top-list">
              <ProductTopItem
                imgLink="./product-apple.png"
                ptimgClass="product__top-img-apple"
                ptopTitle="Apple"
                ptopText="Apple is one of the most famous smart watches providing
                    company."
              />
              <ProductTopItem
                imgLink="./product-xiaomi.png"
                ptimgClass="product__top-img-xiaomi"
                ptopTitle="Xiaomi"
                ptopText=" Xiaomi smart watches are produced by MI company."
              />
              <ProductTopItem
                imgLink="./product-fitbit.png"
                ptimgClass="product__top-img-fitbit"
                ptopTitle="FitBit"
                ptopText="FitBit smart watches are best for there health and fitness
                    features."
              />
            </ul>
          </div>
          <a href="" className="product__info-link">
            Find your favourite smart watch.
          </a>
          <h1 className="product__info-title">Our Latest Products</h1>
          <div className="product__bottom">
            <ul className="product__bottom-list">
              <ProductBottomItem
                productImgLink="./product-apple-samrt1.png"
                watchName="Apple Smart I"
                summ="$300.00"
                summAksia="$255.00"
              />
              <ProductBottomItem
                productImgLink="./product-apple-samrt2.png"
                watchName="Apple Smart II"
                summ="$300.00"
                summAksia="$255.00"
              />
              <ProductBottomItem
                productImgLink="./product-apple-samrt3.png"
                watchName="Apple Smart III"
                summ="$300.00"
                summAksia="$255.00"
              />
              <ProductBottomItem
                productImgLink="./product-apple-samrt4.png"
                watchName="Apple Smart IV"
                summ="$450.00"
                summAksia="$399.00"
              />
              <ProductBottomItem
                productImgLink="./product-samsung-pro.png"
                watchName="Samsung Watch Pro"
                summ="$300.00"
                summAksia="$255.00"
              />
              <ProductBottomItem
                productImgLink="./product-fitbit-max1.png"
                watchName="Fitbit Max 1"
                summ=" "
                summAksia="$155.00"
              />
            </ul>
          </div>
          <div className="product__btn">
            <a href="" className="product__btn-link">
              View More
            </a>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="about-us__wrapper container">
          <a href="" className="about-us__link">
            Here are our some of the best clients.
          </a>
          <h1 className="about-us__title">What People Say About Us</h1>
          <ul className="person__list">
            <PersonItem
              personImgLink="./about-us-person-hamza.png"
              personName="Hamza Faizi"
              personInfoText="Don’t waste time, just order! This is the best website to puschase
              smart watches."
            />
            <PersonItem
              personImgLink="./about-us-person-hafiz.png"
              personName="Hafiz Huzaifa"
              personInfoText="I’ve been purchasing smart watches of Mohid for a long time.
                    All the products are good quality."
            />
          </ul>
          <div className="person__list-radio">
            <ul className="person__list-nav">
              <PersonSlider
                itemClassName="person__list-nav-item1"
                hrefLink="#"
              />
              <PersonSlider
                itemClassName="person__list-nav-item2"
                hrefLink="#"
              />
              <PersonSlider
                itemClassName="person__list-nav-item3"
                hrefLink="#"
              />
              <PersonSlider
                itemClassName="person__list-nav-item4"
                hrefLink="#"
              />
              <PersonSlider
                itemClassName="person__list-nav-item5"
                hrefLink="#"
              />
            </ul>
          </div>
          <div className="subscribe-page">
            <div className="subscribe-page__info">
              <h2 className="subscribe-page__title">Subscribe To Newsletter</h2>
              <p className="subscribe-page__text">
                Get free guide about smart watches daily.
              </p>
              <form action="">
                <div className="subscribe-page__input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    required
                  />
                  <button className="subscribe-page__input-button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <img
              src="./subscribe-watch.png"
              alt="watch"
              className="subscribe-page__watch-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
