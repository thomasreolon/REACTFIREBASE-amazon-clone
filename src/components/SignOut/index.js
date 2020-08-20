import React from "react";
import styled from "styled-components";
import { auth } from "../Session/Firebase";

const Btn = styled.button`
  height: 2.3rem;
  margin-top: 0.5rem;
  padding: 3px 5px;
  border-radius: 0.3rem;
  background: linear-gradient(#fada5f, #f0c14b);
  min-width: 3rem;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(#f0c14b, #f0c14b);
  }
`;

const signout = () => {
  auth.signOut();
};

const SignOutButton = () => (
  <Btn type="button" onClick={signout}>
    Esci
  </Btn>
);

export default SignOutButton;
