import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Top = styled.p`
  font-weight: 200;
  font-size: 0.9rem;
  color: lightgrey;
`;

const Bottom = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
  margin-top: -3px;
`;

const MyLink = styled(Link)`
  text-decoration: none;
  padding: 0 10px;
`;

function NavLink(props) {
  return (
    <MyLink to={props.to}>
      <Top>{props.top}</Top>
      <Bottom>{props.bottom}</Bottom>
    </MyLink>
  );
}

export default NavLink;
