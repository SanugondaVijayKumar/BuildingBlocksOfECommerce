import React from "react";
import CartHeading from "./CartHeading";
import { Button, Container, Modal, Table } from "react-bootstrap";
import ModalUI from "../../UI/ModalUI";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  let totalPrice = 0;
  cartElements.forEach((item) => {
    totalPrice += +item.price;
  });

  return (
    <ModalUI onClose={props.onClose}>
      <CartHeading></CartHeading>
      <Table hover>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {cartElements.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    {item.quantity}
                    <Button variant="danger">Remove</Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div style={{ float: "right" }}>
        <strong>Price :$</strong>
        {totalPrice}
      </div>

      <div className=" d-flex justify-content-center align-items-center">
        <Button variant="primary" size="lg">
          PURCHASE
        </Button>{" "}
      </div>
    </ModalUI>
  );
};

export default Cart;
