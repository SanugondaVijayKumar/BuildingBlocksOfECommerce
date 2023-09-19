import React, { useContext } from "react";
import CartHeading from "./CartHeading";
import { Button, Container, Modal, Table } from "react-bootstrap";
import ModalUI from "../../UI/ModalUI";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // const cartElements = [
  //   {
  //     title: "Colors",

  //     price: 100,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

  //     quantity: 2,
  //   },

  //   {
  //     title: "Black and white Colors",

  //     price: 50,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

  //     quantity: 3,
  //   },

  //   {
  //     title: "Yellow and Black Colors",

  //     price: 70,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

  //     quantity: 1,
  //   },
  // ];

  const cartElements = (
    <ul>
      {cartCtx.items.map((item) => (
        <div>
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          imageUrl={item.imageUrl}
          // onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onRemove=
          {() => {
            cartItemRemoveHandler(item.id);
          }}{" "}
          //I added // onAdd={cartItemAddHandler.bind(null, item)}
          onAdd=
          {() => {
            cartItemAddHandler(item);
          }}
        </div>
      ))}
    </ul>
  );

  let totalPrice = 0;
  // cartElements.forEach((item) => {
  //   totalPrice += +item.price;
  // });

  return (
    <ModalUI onClose={props.onClose}>
      <div style={{ position: "relative" }}>
        <Button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "yellow",
            color: "red",
            border: "red",
            fontSize: "1.5rem",
            outline: "1px red",
          }}
          onClick={props.onClose}
        >
          X
        </Button>
      </div>
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
