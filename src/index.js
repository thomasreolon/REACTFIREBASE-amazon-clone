import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import GlobalStyle from "./constants/globalStyle.js";
import App from "./components/App";
import { StateProvider } from "./components/Session/StateProvider";
import reducer, { initialState } from "./constants/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <GlobalStyle />
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
