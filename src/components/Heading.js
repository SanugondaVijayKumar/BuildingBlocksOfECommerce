import React from "react";
import { Container } from "react-bootstrap";

const Heading = (props) => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#f1f1f1",
          paddingRight: "0",
          paddingLeft: "0",
        }}
        className=" d-flex justify-content-center align-items-center"
      >
        <h1 className="display-3 font-italic ">The Generics</h1>
      </Container>
    </>
  );
};

export default Heading;
