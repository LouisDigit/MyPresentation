import React from "react";
import cafe from "./../media/cafe.png";
import journal1 from "./../media/journal1.png";
import journal2 from "./../media/journal2.png";
import ledor from "./../media/ledor.png";
import bookList from "./../media/bookList.png";
import movie from "./../media/movie.png";

const Portfolio = () => {
  return (
    <div className="portfolio-content" id="portfolio">
      <div className="portfolio-nav"></div>
      <div className="portfolio-main-content">
        <div
          id="carouselExemple"
          className="carousel slide"
          data-ride="carousel"
          data-interval="2000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExemple"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExemple" data-slide-to="1"></li>
            <li data-target="#carouselExemple" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={movie} className="d-block" alt="cafe" />
            </div>

            <div className="carousel-item">
              <img src={cafe} className="d-block" alt="journal1" />
            </div>
            <div className="carousel-item">
              <img src={bookList} className="d-block" alt="journal1" />
            </div>
            <div className="carousel-item">
              <img src={journal1} className="d-block" alt="journal1" />
            </div>

            <div className="carousel-item">
              <img src={ledor} className="d-block" alt="ledor" />
            </div>
            <div className="carousel-item">
              <img src={journal2} className="d-block" alt="journal2" />
            </div>
          </div>

          <a
            href="#carouselExemple"
            className="carousel-control-prev"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            href="#carouselExemple"
            className="carousel-control-next"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <h1>Un aperçu de certains projets...</h1>
      </div>
    </div>
  );
};

export default Portfolio;
