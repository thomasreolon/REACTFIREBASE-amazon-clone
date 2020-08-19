import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import NavLink from "./NavLink";
import SignOutButton from "../SignOut";

const List = styled.ul`
  display: flex;

  & li {
    padding: 0 10px;
    list-style-type: none;
  }
`;

//------------------------------
const Auth = () => (
  <List>
    <NavLink top="Ciao, ..." bottom="Account" to={ROUTES.ACCOUNT} />
    <li>
      <SignOutButton />
    </li>
  </List>
);

const NonAuth = () => (
  <List>
    <NavLink top="Ciao, Accedi" bottom="Account" to={ROUTES.SIGN_IN} />
    <NavLink top="Resi" bottom="e ordini" to={ROUTES.SIGN_IN} />
    <NavLink top="Iscriviti a" bottom="Prime" to={ROUTES.SIGN_IN} />
  </List>
);

//-----------------------------

export default { Auth, NonAuth };
