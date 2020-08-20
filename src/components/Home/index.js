import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import Item from "./Item";

const RowContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemsContainer = styled.div`
  margin-top: -300px;
  @media (max-width: 1200px) {
    margin-top: -18vh;
  }
`;

const PageWrapper = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
`;

const HomePage = () => {
  document.body.style = "background: rgb(234,237,237);";

  return (
    <PageWrapper>
      <Banner />
      <ItemsContainer>
        <RowContainer>
          <Item
            id="1"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price="360"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
          />
          <Item
            id="2"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
            price="399.99"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
          />
        </RowContainer>
        <RowContainer>
          <Item
            id="10"
            title="Pattex Millechiodi Tape, nastro biadesivo extra forte per applicazioni permanenti, nastro adesivo di montaggio per interni ed esterni, 19 mm x 1,5 m"
            price="5.19"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61-M0oSu0NL._AC_SL1000_.jpg"
          />
          <Item
            id="11"
            title="Echo Dot (3ª generazione) - Altoparlante intelligente con integrazione Alexa - Tessuto antracite  "
            price="39.99"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
          />
          <Item
            id="12"
            title="Atwood Canvas, Scarpe da Ginnastica Uomo"
            price="26.99"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61BJjypiBrL._AC_UY500_.jpg"
          />
        </RowContainer>
        <RowContainer>
          <Item
            id="23"
            title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black"
            price="132.50"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61zhZdddWVL._AC_SL1500_.jpg"
          />
        </RowContainer>
      </ItemsContainer>
    </PageWrapper>
  );
};

export default HomePage;
