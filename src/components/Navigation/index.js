import React from "react";
import { Link } from "react-router-dom";

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
          padding: "3px 0",
        }}
      >
        {/* LOGO */}
        <Logo to="" src="img/ama_logo.svg" />

        {/* SEARCH */}
        <SearchBar />

        {/* LINKS */}
        {authUser ? <Menu.Auth /> : <Menu.NonAuth />}
        <Basket />
      </nav>
    )}
  </AuthUserContext.Consumer>
);

export default Navigation;
