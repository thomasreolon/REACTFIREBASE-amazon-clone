import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import NavLink from "./NavLink";
import SignOutButton from "../SignOut";
import { useStateValue } from "../Session/StateProvider";

import { Menu } from "@material-ui/icons";

const MyMenu = styled(Menu)`
  width: 10vw;
  height: 10vw;
  color: white;
`;

const smallMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  background-color: whitesmoke;
  z-index: 5;
  display: hidden;

  & > ul {
    flex-direction: column;
  }
`;

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

var menVisible = false;
const toggleMenu = () => {
  console.log("pressed");
  if (menVisible)
    document.getElementById("menusmalllist").style = { display: "hidden" };
  else document.getElementById("menusmalllist").style = { display: "block" };
};

const MenuSmall = () => {
  return (
    <div>
      <MyMenu onClick={toggleMenu} />
      <smallMenuWrapper id="menusmalllist">
        <NonAuth />
      </smallMenuWrapper>
    </div>
  );
};

//-----------------------------

export default { Auth, NonAuth, MenuSmall };
