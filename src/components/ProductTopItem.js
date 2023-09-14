const ProductTopItem = ({ imgLink, ptimgClass, ptopTitle, ptopText }) => {
  return (
    <>
      <li className="product__top-item">
        <a href="">
          <img src={imgLink} alt="" className={ptimgClass} />
        </a>
        <div className="product__title-wrapper">
          <h4 className="product__top-title">{ptopTitle}</h4>
          <p className="product__top-text">{ptopText}</p>
        </div>
      </li>
    </>
  );
};
export default ProductTopItem;
// <ProductTopItem imgLink="" ptimgClass="" ptopTitle="" ptopText />
