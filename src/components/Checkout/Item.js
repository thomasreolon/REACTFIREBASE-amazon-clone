import React from "react";
import styled from "styled-components";
import Line from "./Line";
import { useStateValue } from "../Session/StateProvider";

const Block = styled.div`
  display: flex;
  width: 50vw;

  & > img {
    width: 40%;
    height: 40%;
    border-radius: 0.2rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-left: 15px;
  & h3 {
    font-weight: bold;
    color: darkblue;
  }
  & > p {
    color: darkred;
  }
  & > button {
    width: 14rem;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 0.3rem;
    background: linear-gradient(#fada5f, #f0c14b);
    border: 1px solid black;
    margin-top: 15px;
    cursor: pointer;
  }
  & > button:hover {
    background: linear-gradient(#f0c14b, #f0c14b);
  }
`;

function Item({ title, price, id, image }) {
  const [{}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div>
      <Block>
        <img src={image} />
        <Info>
          <h3>{title}</h3>
          <h3>€{price}</h3>
          <p>Disponibilità: solo 1</p>
          <button onClick={removeFromBasket}>Rimuovi dal Carrello</button>
        </Info>
      </Block>
      <Line />
    </div>
  );
}

export default Item;
