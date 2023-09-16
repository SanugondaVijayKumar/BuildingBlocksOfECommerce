import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const NavBar = (props) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-center align-items-center">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="mx-auto me-auto mr-auto d-flex justify-content-center align-items-center">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
          <Button variant="outline-primary">
            Cart
            <Badge bg="secondary">0</Badge>
          </Button>{" "}
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
