import React from "react";
import * as ROUTES from "../../constants/routes";

import Basket from "./Basket";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Menu from "./Menu";
import { useStateValue } from "../Session/StateProvider";

function Navigation() {
  const [{ user }, dispatch] = useStateValue();
  return (
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
      {user ? <Menu.Auth /> : <Menu.NonAuth />}
      <Basket to={ROUTES.CHECKOUT} />
    </nav>
  );
}

export default Navigation;
