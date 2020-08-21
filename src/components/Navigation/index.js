import React from "react";
import * as ROUTES from "../../constants/routes";

import Basket from "./Basket";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Menu from "./Menu";
import { useStateValue } from "../Session/StateProvider";

import { useViewport, smallScreenSize } from "../../constants/responsive";

function Navigation() {
  const { width } = useViewport();
  const [{ user }] = useStateValue();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#131921",
        padding: "4px 0",
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      {/* LOGO */}
      <Logo
        to={ROUTES.HOME}
        src={
          width < smallScreenSize
            ? "img/ama_logo_small.png"
            : "img/ama_logo.svg"
        }
      />

      {/* SEARCH */}
      <SearchBar />

      {/* LINKS */}
      {width < smallScreenSize ? (
        <div></div>
      ) : user ? (
        <Menu.Auth />
      ) : (
        <Menu.NonAuth />
      )}
      <Basket to={ROUTES.CHECKOUT} />
    </nav>
  );
}

export default Navigation;
