import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";

import Basket from "./Basket";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Menu from "./Menu";

const Navigation = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#131921",
          padding: "4px 0",
          position: "sticky",
          zIndex: "100",
        }}
      >
        {/* LOGO */}
        <Logo to={ROUTES.HOME} src="img/ama_logo.svg" />

        {/* SEARCH */}
        <SearchBar />

        {/* LINKS */}
        {authUser ? <Menu.Auth /> : <Menu.NonAuth />}
        <Basket to={ROUTES.CHECKOUT} />
      </nav>
    )}
  </AuthUserContext.Consumer>
);

export default Navigation;
