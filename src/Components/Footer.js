import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logoRollingvet from "../assets/img/logoRollingvet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

  return (
    <Container fluid className="footerContainer">
      <Row>
        <Col sm={3} className="textoFooter text-center">
          {" "}
          <img
            src={logoRollingvet}
            alt="logo"
            className="logoRollingvet"
          />{" "}
        </Col>
        <Col sm={6} className="textoFooter py-3"> <h3 className="text-center">¡CONTACTANOS!</h3>
          <div>
            <ul className="py-4 listaContactos">
              <li className="py-1">
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="iconoContacto"
                  style={{ fontSize: "2em" }}
                />
                +54 (381) 642-6143{" "}
              </li>
              <li className="py-1">
                {" "}
                <FontAwesomeIcon
                  icon={faPhone}
                  className="iconoContacto"
                  style={{ fontSize: "2em" }}
                />
                CASA CENTRAL:(381) 642-6143 / BARRIO SUR:(381) 327-9474
              </li>
              <li className="py-1">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="iconoContacto"
                  style={{ fontSize: "2em" }}
                />
                rollingvet@gmail.com
              </li>
              <li className="py-1">
                <FontAwesomeIcon
                  icon={faHome}
                  className="iconoContacto"
                  style={{ fontSize: "2em" }}
                />
                Av.Alem 532(Casa Central) / Jujuy 572(Barrio Sur)
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={3} className="textoFooter py-3 text-center">
          <h3 className="Text-center">SIGAMOS CONECTADOS</h3>
          <div>
            <ul className="py-5 iconosFooter">
              <Nav.Link href="/Error404">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="iconoRedes"
                  style={{ fontSize: "4em" }}
                  type="submit"
                />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/rollingvet/?hl=es-la">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="iconoRedes"
                  style={{ fontSize: "4em" }}
                  type="submit"

                />
              </Nav.Link>
              <Nav.Link href="/Error404">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="iconoRedes"
                  style={{ fontSize: "4em" }}
                  type="submit"
                />
              </Nav.Link>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
