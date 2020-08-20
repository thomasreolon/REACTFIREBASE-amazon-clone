import React from "react";
import styled from "styled-components";

import { withFirebase } from "../Firebase";

const Btn = styled.button`
  padding: 3px 5px;
  border-radius: 0.3rem;
  background: linear-gradient(#fada5f, #f0c14b);
  min-width: 3rem;
  margin-bottom: 15px;
  cursor: pointer;
`;

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Esci
  </button>
);

export default withFirebase(SignOutButton);
