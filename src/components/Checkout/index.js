import React from "react";
import styled from "styled-components";

import { useStateValue } from "../Session/StateProvider";
import Item from "./Item";
import Line from "./Line";
import { Link } from "react-router-dom";

import { useViewport, smallScreenSize } from "../../constants/responsive";

const PageWrapper = styled.div`
  margin: 10px;
  margin-left: 20px;
  & > div {
    display: flex;
    @media (max-width: ${smallScreenSize}px) {
      flex-direction: column;
    }
  }
`;

const Btn = styled.button`
   {
    width: 14rem;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 0.3rem;
    background: linear-gradient(#fada5f, #f0c14b);
    border: 1px solid black;
    margin-top: 15px;
    cursor: pointer;
  }
  &:hover {
    background: linear-gradient(#f0c14b, #f0c14b);
  }
`;

const ItemsWrapper = styled.div`
  flex: 2;
  margin: 10px;
`;

const Paycheck = styled.div`
  height: 10rem;
  min-width: 23rem;
  background-color: rgb(234, 237, 237);
  border-radius: 0.4rem;
  @media (max-width: ${smallScreenSize}px) {
    min-width: 75%;
  }
`;
const PaycheckInfo = styled.div`
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Checkout(props) {
  document.body.style = "background: white;";

  const [{ basket, user }, dispatch] = useStateValue();
  var total = 0.0;

  const res =
    basket?.length > 0 ? (
      <PageWrapper>
        <h2>Carrello</h2>
        <div>
          <ItemsWrapper>
            <Line />

            {basket.map((item) => {
              total += parseFloat(item.price);
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              );
            })}
          </ItemsWrapper>

          <Paycheck>
            <PaycheckInfo>
              <h4>Prezzo totale provvisorio: </h4>
              <h2>€{total}</h2>
              <Btn>Procedi all'Ordine</Btn>
            </PaycheckInfo>
          </Paycheck>
        </div>
      </PageWrapper>
    ) : (
      <PageWrapper>
        <h2>Il carrello è vuoto</h2>
        <Line />
        <p>
          torna alla pagina principale e premi sui pulsanti "aggiungi al
          carrello"
        </p>
        <Link to="/"> pagina principale</Link>
      </PageWrapper>
    );

  return res;
}

export default Checkout;
