const PersonItem = ({ personImgLink, personName, personInfoText }) => {
  return (
    <>
      <li className="person__item">
        <div className="person__item-wrapper">
          <img src={personImgLink} alt="" className="person__img" />
          <div className="person__info">
            <h4 className="person__info-name">{personName}</h4>
            <p className="person__info-text">{personInfoText}</p>
            <img
              src="./product-star-icon.svg"
              alt="ret us"
              className="person__info-star"
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default PersonItem;
