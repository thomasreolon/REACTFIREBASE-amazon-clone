import React from "react";
import styled from "styled-components";

import { smallScreenSize } from "../../constants/responsive";

const Img = styled.img`
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
  width: 100%;
  margin-top: -2px;

  @media (max-width: ${smallScreenSize}px) {
    position: absolute;
    margin: auto;
    min-height: 130%;
    min-width: 130%;
    left: -20%;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 20vh;
  overflow: visible;
  position: relative;
  @media (max-width: ${smallScreenSize}px) {
    overflow: hidden;
  }
`;

function Banner(props) {
  return (
    <Div>
      <Img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
    </Div>
  );
}

export default Banner;
