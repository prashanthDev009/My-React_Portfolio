import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { VscFolderLibrary, VscFolerLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwild</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10 Completed</small>
            </article>
          </div>
          <div className="about__content-para-btn">
            <p>
              I'm a Fullstack Software Engineer with experience in Website,
              Mobile and Software development. Check out my projects and
              skillset.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
