import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page" id="accueil">
      <div className="landing-nav">
        <ul>
          <a href="#accueil">
            <li>Accueil</li>
          </a>

          <a href="#me">
            <li>Me</li>
          </a>
          <a href="#competences">
            <li>Compétences</li>
          </a>

          <a href="#portfolio">
            <li>Portfolio</li>
          </a>

          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className="landing-me">
        <div className="landing-me-content">
          <h1>
            <i class="fa-solid fa-code-simple"></i>Louis Vanoise
            <i class="fa-solid fa-code"></i>
          </h1>
          <h3>développeur web junior</h3>
          <a href="./CV.pdf" target="_blank" className="btn btn-success">
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
