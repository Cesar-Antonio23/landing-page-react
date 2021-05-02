import React from "react";
import { Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <Row className="footer bg-dark">
      <Col className="columna">
        <p className="text-footer text-light">Copyright &copy; Your Website {new Date().getFullYear()} </p>
      </Col>
    </Row>
  );
};

export default Footer;
