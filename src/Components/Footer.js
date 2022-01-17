import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import logoRollingvet from '../Components/img/logoRollingvet.png'


const Footer = () => {
    return (
        <Container fluid className='footerContainer'>
        <Row>
          <Col sm={4} className='textoFooter text-center'> <img src={logoRollingvet} alt='logo' className='logoRollingvet' /> </Col>
          <Col sm={4} className='textoFooter'>CONTACTANOS!
          <div>
              <ul>
                  <li>+54 (381) 642-6143 </li>
                  <li>CASA CENTRAL:(381) 642-6143 / BARRIO SUR:(381) 327-9474</li>
                  <li>rollingvet@gmail.com</li>
                  <li>Av.Alem 532(Casa Central) / Jujuy 572(Barrio Sur)</li>
              </ul>
          </div></Col>
          <Col sm={4} className='textoFooter'>SIGAMOS CONECTADOS</Col>
        </Row>
      </Container>
    );
};

export default Footer;