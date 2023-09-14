const ListItem = (props) => {
  return (
    <>
      <li className="site-nav__item">
        <a href="#" className="site-nav__link">
          {props.title}
        </a>
        <img
          src="./header-list-path-icon.svg"
          alt=""
          className="click-path-icon"
        />
      </li>
    </>
  );
};
export default ListItem;
