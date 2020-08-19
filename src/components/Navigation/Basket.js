import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Block = styled.div`
  position: relative;
  margin-right: 20px;
  margin-left: 15px;
  display: flex;
`;

const Img = styled.img`
  margin-top: 5%;
  width: 3rem;
  height: 90%;
`;

const Cart = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  color: white;
  font-size: 1.1rem;
`;

const Number = styled.p`
  color: orange;
  font-weight: 800;
  position: absolute;
  top: 0.1rem;
  left: 1.6rem;
`;

function Basket(props) {
  return (
    <Block>
      <Img src="img/cart.png" />
      <Cart>Carrello</Cart>
      <Number>0</Number>
    </Block>
  );
}

export default Basket;