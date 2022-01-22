import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Error404.css";
import logoHorizontal from '../Components/img/logoHorizontal.png';


const Error404 = () => {
  return (
    <div className="divSuperior">
      <div class="error">404</div>
      <br />
      <br />
      <span class="info">File not found <img src={logoHorizontal}
      className="logoHorizontal"
      alt="logoHorizontal"/></span>
      
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Mono&family=VT323&display=swap');
      </style>
    </div>
  );
};

export default Error404;
