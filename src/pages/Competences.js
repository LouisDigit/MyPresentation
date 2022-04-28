import React from "react";

const BarPro = () => {
  return <div className="pro"></div>;
};

const BarSemiPro = () => {
  return <div className="semi-pro"></div>;
};

const BarIntermediaire = () => {
  return <div className="intermediaire"></div>;
};

const Competences = () => {
  return (
    <div className="competence-content" id="competences">
      <div className="competence-nav"></div>
      <div className="competence-main-content">
        <div className="competence-items">
          <div className="competence-langages">
            <h1>Technologies du Web</h1>
            <div className="langage-item">
              <h3>HTML</h3>
              <div className="logo">
                <i className="fa-brands fa-html5"></i>
              </div>

              <BarPro />
            </div>
            <div className="langage-item">
              <h3>CSS</h3>
              <div className="logo">
                <i className="fa-brands fa-css3"></i>
              </div>

              <BarPro />
            </div>
            <div className="langage-item">
              <h3>JAVASCRIPT</h3>
              <div className="logo">
                <i className="fa-brands fa-js"></i>
              </div>

              <BarPro />
            </div>
            <div className="langage-item">
              <h3>PHP</h3>
              <div className="logo">
                <i className="fa-brands fa-php"></i>
              </div>
              <BarSemiPro />
            </div>
            <div className="langage-item">
              <h3>REACT JS</h3>
              <div className="logo">
                <i className="fa-brands fa-react"></i>
              </div>
              <BarSemiPro />
            </div>
            <div className="langage-item">
              <h3>JQUERY</h3>
              <div className="logo">
                <img src="./media/jquery-logo.jpeg" alt="jquery-logo" />
              </div>
              <BarIntermediaire />
            </div>
            <div className="langage-item">
              <h3>SASS/SCSS</h3>
              <div className="logo">
                <i className="fa-brands fa-sass"></i>
              </div>
              <BarPro />
            </div>
            <div className="langage-item">
              <h3>BOOTSTRAP</h3>
              <div className="logo">
                <i className="fa-brands fa-bootstrap"></i>
              </div>
              <BarSemiPro />
            </div>
          </div>
          <div className="competences-autre">
            <h1>Autres compétences</h1>
            <div className="liste-autre">
              <ul>
                <li>C</li>
                <li>JAVA</li>
                <li>SQLITE</li>
                <li>MYSQL</li>
                <li>PYTHON</li>
              </ul>
              <ul>
                <li>GIT</li>
                <li>GITHUB/GITLAB</li>
                <li>SCRUM</li>
                <li>AZURE DEVOPS</li>
                <li>UNIX/SHELL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="competence-projet">
          <h1>Exemple de projet</h1>
          <div className="list-projet">
            <ul>
              <li>Jeu en Python style Candy Crush</li>
              <li>To do List</li>
              <li>Tableur en Shell</li>
              <li>
                Application intéractive sur le suivi de la Barclays Premier
                League
              </li>
            </ul>
            <ul>
              <li>Site Vitrine</li>
              <li>Rubik's Cube en C</li>
              <li>Application Web de gestion d'un centre hospitalier</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
