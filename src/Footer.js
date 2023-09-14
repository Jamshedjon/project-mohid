import "./Footer.css";
import { useState } from "react";
function Footer() {
  const [name, setName] = useState("jamshid");
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <p className="footer__text">Copyright @ 2022 | Mohid</p>
      </div>
    </footer>
  );
}

export default Footer;
