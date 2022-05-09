import React, { useState } from "react";

const Footer = () => {
  const [loveCaroline, setLoveCaroline] = useState(false);
  return (
    <div className="footer">
      <p>
        Copyright{" "}
        <i
          class="fa-solid fa-copyright"
          onClick={() => setLoveCaroline(!loveCaroline)}
        ></i>{" "}
        2022 - Tous droits réservés Louis Vanoise
        {loveCaroline ? <p>Caroline t'es la femme de ma vie❤️</p> : <p></p>}
      </p>
    </div>
  );
};

export default Footer;
