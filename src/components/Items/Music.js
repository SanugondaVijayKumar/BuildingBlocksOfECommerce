import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

const Music = (props) => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      album: "Album 1",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      album: "Album 2",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      album: "Album 3",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      album: "Album 4",
    },
  ];

  return (
    <>
      <Container className="text-center">
        <h3 className="mb-3">Music</h3>
        <Row className="justify-content-center">
          {productsArr.map((item) => (
            <Col key={item.title} sm={6} md={6} lg={6} xl={6}>
              <h4>{item.album}</h4>
              <Figure>
                <Figure.Image
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

export default Music;
