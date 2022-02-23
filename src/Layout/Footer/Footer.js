import React from "react";
import Logo from "../../Assets/Images/Logo.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <img className="foot-logo" src={Logo} alt="" />
      <ul className="foot_navbar2">
        <li>
          <a href="#home" className="foot-items">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="foot-items">
            About
          </a>
        </li>
        <li>
          <a href="#collection" className="foot-items">
            Collection
          </a>
        </li>
        <li>
          <a href="#roadmap" className="foot-items">
            Roadmap
          </a>
        </li>
        <li>
          <a href="#team" className="foot-items">
            Team
          </a>
        </li>
        <li>
          <a href="#faq" className="foot-items">
            FAQ
          </a>
        </li>
      </ul>

      <div className="footer_social">
      <a className="a-footer-button" href="http://discord.gg/BQacmjg8kg" target="__blank">
        <i className="footer_icon fab fa-discord" style={{display:"flex"}}></i>
        </a>
        <a className="a-footer-button" href="https://twitter.com/waifustationnft" target="__blank">
        <i className="footer_icon fab fa-twitter" style={{display:"flex"}}></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
