const ProductBottomItem = ({ productImgLink, watchName, summ, summAksia }) => {
  return (
    <>
      <li className="product__bottom-item">
        <div className="product__bottom-item-bg">
          <div className="productSyle product__bottom-img-wrapper-apple-smart1">
            <a href="" className="product__bottom-korzinka-link">
              <img
                src="./korzinka-shopping-cart-icon.svg"
                alt=""
                className="product__bottom-korzinka-shopping-cart-icon"
              />
            </a>
            <a
              href="./product-love-icon.svg"
              className="product__bottom-korzinka-link"
            >
              <img
                src="./product-love-icon.svg"
                alt=""
                className="product__bottom-korzinka-love-icon"
              />
            </a>
          </div>
          <a href="" className="product-apple-smart1-link">
            <img src={productImgLink} alt="" className="product__bottom-img" />
          </a>
        </div>
        <h4 className="product__bottom-list-title">{watchName}</h4>
        <img src="./product-star-icon.svg" alt="" className="star" />
        <p className="product__price">
          <span>{summ}</span>
          {summAksia}
        </p>
      </li>
    </>
  );
};

export default ProductBottomItem;
// <ProductBottomItem watchName="" summ="" summAksia="" productImgLink=""/>
