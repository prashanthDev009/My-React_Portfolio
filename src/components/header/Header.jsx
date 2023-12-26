import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typed from "react-typed";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello {"👋"} I'm</h5>
        <h3>Prashanth</h3>
        <h2 className="text-light">
          <Typed
            strings={["A Fullstack Developer"]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </h2>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
