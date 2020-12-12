import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {

  return (
    <Container fluid className="bg-secondary">
      <Container inline>
        <div className="p-2">
         {(new Date().getFullYear())}
        </div>
      </Container>
    </Container>
  );

};

export default Footer;