import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import ORIGAMI from "../../assets/origami.png";
import HeaderSocials from "./HeaderSocials";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello {"👋"} I'm</h5>
        <h3>
          Prashanth
          <div className="origami__conatiner">
            <img src={ORIGAMI} alt="origami" />
          </div>
        </h3>
        <h2 className="text-light">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "A Fullstack Developer",
              500, // wait 1s before replacing "MobileDev"
              "Mobile Developer",
              500,
              "UI/UX Designer",
              500,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
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
