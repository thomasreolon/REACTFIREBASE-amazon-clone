import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import Prime from "../Prime";
import Checkout from "../Checkout";

import * as ROUTES from "../../constants/routes";
import { useStateValue } from "../Session/StateProvider";
import { auth, db } from "../Session/Firebase";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //signin
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //signout
        dispatch({ type: "SET_USER", user: null });
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <hr />

        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.CHECKOUT} component={Checkout} />
        <Route path={ROUTES.PRIME} component={Prime} />

        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      </div>
    </Router>
  );
}

export default App;
