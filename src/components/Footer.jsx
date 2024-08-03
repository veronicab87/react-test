import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-media">
          <a href="#">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCog} />
          </a>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#">Política de Privacidad</a>
          </li>
          <li>
            <a href="#">Términos de Servicio</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <p>&copy; 2024 The Runner Blog. Todos los derechos reservados.</p>
    </footer>
  );
}
