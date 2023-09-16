import React from "react";
import { Button, Container } from "react-bootstrap";

const CartButton = (props) => {
  return (
    <>
      <Container className=" d-flex justify-content-center align-items-center">
        <Button variant="secondary">See The Cart</Button>
      </Container>
    </>
  );
};

export default CartButton;
