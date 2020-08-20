import React from "react";
import styled from "styled-components";

const Img = styled.img`
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
  width: 100%;
  margin-top: -2px;
`;

function Banner(props) {
  return (
    <div>
      <Img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
    </div>
  );
}

export default Banner;
