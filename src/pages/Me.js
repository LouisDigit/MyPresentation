import React from "react";

const Me = () => {
  return (
    <div className="me-page" id="me">
      <div className="me-page-nav"></div>
      <div className="me-page-content">
        <div className="me-presentation">
          <div className="me-presentation-txt">
            <h3>Qui suis-je?</h3>
            <p>
              Bonjour, je suis Louis, un jeune passionné de développement
              informatique qui occupe son temps libre en tappant des lignes de
              codes et en élaborant des algorithmes en tout genre. <br />
              <br />
              J'ai actuellement 21 ans et je code depuis mes 15 ans. J'ai
              découvert la programmation par hasard par le biais de forum de
              l'époque et depuis je n'ai jamais su m'en défaire. Je dois avouer
              que le domaine du développement web m'intéresse plus
              particulièrement car c'est celui dans lequel je prend le plus de
              plaisir.
            </p>
          </div>
          <img src="./media/profile.png" alt="moi" />
        </div>
        <div className="me-experiences">
          <h1>Experiences</h1>
          <div className="me-experiences-item">
            <div className="item-txt">
              <h1>Développeur Web</h1>
              <h3>Coqliqo</h3>
              <span>2022</span>
              <p>
                Participation au projet de portage multi-navigateurs suite à la
                proche extinction d'Internet Explorer. Correction des différents
                problème Front-end liés au changement de navigateurs, refonte
                graphique d'une application web de SAV pour Conforama.
              </p>
              <div className="list-techno">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3"></i>
                <i className="fa-brands fa-js"></i>
                <i className="fa-brands fa-git-alt"></i>
              </div>
            </div>
            <div className="item-img">
              <img src="./media/coqliqo_logo.jpeg" alt="coqliqo" />
            </div>
          </div>
          <div className="me-experiences-item">
            <div className="item-txt">
              <h1>Formation Autodidacte</h1>
              <h3>Dyma | Udemy</h3>
              <span>2018-2022</span>
              <p>
                Je me forme en autodidacte via une plateforme de cours en ligne
                de qualité destinée aux entreprises. J'ai participé a des cours
                de remise à niveau en HTML/CSS/SASS modernes. J'ai aussi fini
                les formations Git/GitHub. Et je suis actuellement entrain de
                suivre la formation React JS. Dyma.fr
              </p>
              <div className="list-techno">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3"></i>
                <i className="fa-brands fa-js"></i>
                <i className="fa-brands fa-git-alt"></i>
                <i className="fa-brands fa-react"></i>
                <i className="fa-solid fa-c"></i>
                <i className="fa-brands fa-java"></i>
                <i className="fa-brands fa-php"></i>
              </div>
            </div>
            <div className="item-img">
              <img src="./media/dyma.png" alt="dyma" />
            </div>
          </div>
        </div>
        <div className="me-hobbies">
          <h1>Hobbies</h1>
          <div className="list-hobbies">
            <div className="hobbies-item">
              <h3>Football</h3>
              <i className="fa-solid fa-futbol"></i>
              <span className="line"></span>
            </div>
            <div className="hobbies-item">
              <h3>Tech</h3>
              <i className="fa-solid fa-computer"></i>
              <span className="line"></span>
            </div>
            <div className="hobbies-item">
              <h3>Voyage</h3>
              <i className="fa-solid fa-plane"></i>
              <span className="line"></span>
            </div>
            <div className="hobbies-item">
              <h3>Friends</h3>
              <i className="fa-solid fa-user-group"></i>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
