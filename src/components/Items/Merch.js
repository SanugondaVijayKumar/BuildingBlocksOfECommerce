import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

import TshirtUrl from "../../assets/t shirt.png";
import CoffeeCupUrl from "../../assets/coffee cup.png";

import classes from "./Music.module.css";

const Merch = (props) => {
  const productsArr = [
    {
      title: "Tea Shirt",
      price: 100,
      imageUrl: TshirtUrl,
      album: "Album 1",
    },
    {
      title: "Coffee Cup",
      price: 50,
      imageUrl: CoffeeCupUrl,
      album: "Album 2",
    },
  ];

  return (
    <>
      <Container className="text-center">
        <h3 className="mb-3">Merch</h3>
        <Row className="justify-content-center">
          {productsArr.map((item) => (
            <Col key={item.title} sm={6} md={6} lg={6} xl={6}>
              <h4>{item.title}</h4>
              <Figure>
                <Figure.Image
                  className={classes["zoom-image"]}
                  width={250}
                  height={300}
                  alt={item.title}
                  src={item.imageUrl}
                />
                <Figure.Caption>
                  <span style={{ float: "left", fontWeight: "bold" }}>
                    ${item.price}
                  </span>
                  <Button
                    variant="primary"
                    size="sm"
                    style={{ float: "right" }}
                  >
                    ADD TO CART
                  </Button>{" "}
                </Figure.Caption>
              </Figure>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Merch;
