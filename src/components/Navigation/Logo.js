import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 10vw;
  margin: 12px 20px 0px 20px;
`;

function Logo(props) {
  return (
    <Link to={props.to}>
      <Img src={props.src} alt="amazon logo" />
    </Link>
  );
}

export default Logo;
