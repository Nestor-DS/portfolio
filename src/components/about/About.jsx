import React from "react";
import "./about.css";
import ME from "../../assets/catImage.svg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Conoce un poco</h5>
      <h2 className="about__me__header">Sobre mí</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <a href="#experience">
              <img src={ME} alt="About Image" />
            </a>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="#experience">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Tecnologías</h5>
              </article>
            </a>

            <a href="#services">
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Preparación</h5>
              </article>
            </a>

            <a href="#portfolio">
              <article className="about__card">
                <BsFolderFill className="about__icon" />
                <h5>Proyectos</h5>
              </article>
            </a>
          </div>

          <div className="about__cards"></div>
          <p className="about__text">
            Apasionado por las nuevas tecnologías y con una habilidad en
            constante mejora para abordar desafíos, me encuentro impulsado en
            una búsqueda constante de conocimiento. Siempre dispuesto a aprender
            y crecer, empleando una resolución creativa de problemas. Estoy
            emocionado por contribuir al mundo del desarrollo de software por
            medio de resolución de problemas de manera cretiva.
          </p>
          <a href="#contact" className="btn">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
