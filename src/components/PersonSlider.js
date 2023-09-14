const PersonSlider = ({ itemClassName, hrefLink }) => {
  return (
    <>
      <li className={itemClassName}>
        <a href={hrefLink} className="person__list-link"></a>
      </li>
    </>
  );
};

export default PersonSlider;
