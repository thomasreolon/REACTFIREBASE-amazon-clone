import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import Firebase, { FirebaseContext } from "./components/Firebase";

import GlobalStyle from "./constants/globalStyle.js";
import App from "./components/App";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
