import React from "react";
import styled from "styled-components";

import { useStateValue } from "../Session/StateProvider";
import { smallScreenSize } from "../../constants/responsive";

const abbr = (instr) => {
  const res = instr.length > 100 ? instr.substr(0, 100) + "..." : instr;
  return res;
};

const Product = styled.div`
    z-index:2;
    background-color: #fff;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    flex:1;
    height: 24rem;

    & > img{
        height:50%;
        width:90%;
        object-fit:contain;
        margin-bottom:15px;
    }

    & > button {
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 0.3rem;
        background: linear-gradient(#fada5f, #f0c14b);
        width: 33%;
        min-width:3rem;
        border: 1px solid black;
        margin-bottom: 15px;
        cursor:pointer;
    }
    & > button:hover{
        background: linear-gradient(#f0c14b, #f0c14b);
    }
    @media (max-width: ${smallScreenSize}px) {
      min-width: 80vw;
    }

}
`;

const StarContainer = styled.div`
  display: flex;
`;
const Price = styled.p`
  display: flex;
  align-items: center;
`;
const Info = styled.div`
  height: 100%;
  width: 100%;
`;

function Item({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <Product>
      <Info>
        <p>{abbr(title)}</p>
        <Price>
          <small>€ </small>
          <strong>{price}</strong>
        </Price>
        <StarContainer key={id}>
          {[...Array(rating)].map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}
        </StarContainer>
      </Info>
      <img src={image} />
      <button onClick={addToBasket}>Aggiungi al carrello</button>
    </Product>
  );
}

export default Item;
