import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useStateValue } from "../Session/StateProvider";

import { useViewport, smallScreenSize } from "../../constants/responsive";

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
  const { width } = useViewport();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Link to={props.to}>
      <Block>
        <Img src="img/cart.png" />
        {width > smallScreenSize && <Cart>Carrello</Cart>}
        <Number>{basket?.length}</Number>
      </Block>
    </Link>
  );
}

export default Basket;
