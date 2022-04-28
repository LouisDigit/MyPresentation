import React from "react";

const Contact = () => {
  return (
    <div className="contact-content" id="contact">
      <div className="contact-nav"></div>
      <div className="contact-main-content">
        <div className="contact-me">
          <h1>Me contacter</h1>
          <div className="item">
            <i class="fa-solid fa-envelope"></i>
            <span>louisv.digit@gmail.com</span>
          </div>
          <div className="item">
            <i class="fa-solid fa-mobile-screen"></i>
            <span>06 42 75 01 80</span>
          </div>
          <div className="item">
            <i class="fa-solid fa-location-dot"></i>
            <span>Lille</span>
          </div>
          <div className="separator"></div>
          <div className="social">
            <a href="https://twitter.com/LouisVnse" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/LouisDigit" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/louis-vanoise-551493233/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
