import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import NavLink from "./NavLink";
import SignOutButton from "../SignOut";
import { useStateValue } from "../Session/StateProvider";

const List = styled.ul`
  display: flex;

  & li {
    padding: 0 10px;
    list-style-type: none;
  }
`;

//------------------------------
const Auth = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <List>
      <NavLink top="Ciao," bottom={user.email} to={ROUTES.CHECKOUT} />
      <li>
        <SignOutButton />
      </li>
    </List>
  );
};

const NonAuth = () => (
  <List>
    <NavLink top="Ciao, Accedi" bottom="Account" to={ROUTES.SIGN_IN} />
    <NavLink top="Resi" bottom="e ordini" to={ROUTES.CHECKOUT} />
    <NavLink top="Iscriviti a" bottom="Prime" to={ROUTES.PRIME} />
  </List>
);

//-----------------------------

export default { Auth, NonAuth };
