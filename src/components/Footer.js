import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Col, Row } from "react-bootstrap";

import { SocialIcon } from "react-social-icons";

const YouTube = <SocialIcon url="https://www.youtube.com" />;
const Spotify = <SocialIcon url="https://open.spotify.com" />;
const Facebook = <SocialIcon url="https://www.facebook.com" />;

const Footer = (props) => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ backgroundColor: "blue" }}
      >
        <Container
          fluid
          className=" d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "lightgreen" }}
        >
          <Row>
            <Col>
              <Navbar.Brand
                href="#home"
                className="ml-auto flex-grow-1"
                style={{ fontSize: "50px" }}
              >
                The Generics
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>

            <Col xs="auto">
              <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                <Nav className="ml-auto mx-auto mt-2">
                  {YouTube}
                  {Spotify}
                  {Facebook}
                </Nav>
                {/* <Nav className="mx-auto">{Spotify}</Nav>
                <Nav className="mx-auto">{Facebook}</Nav> */}
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
