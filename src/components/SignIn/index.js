import React, { Component, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { auth, db } from "../Session/Firebase";

import styled from "styled-components";

const Img = styled.img`
  width: 6rem;
  margin-bottom: 1.5rem;
`;

const WrapPage = styled.div`
  width: 30rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
`;

const Form = styled.div`
background-color:white;
  width: 100%,
  padding:10px;
  border-radius: 0.3rem;
`;

const SignInPage = () => (
  <WrapPage>
    <Img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
    <Form>
      <h1>Accedi (non è amazon vero)</h1>
      <hr />
      <SignInForm />
    </Form>
  </WrapPage>
);

function SignInFormBase(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //go to homepage
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  document.body.style = "background: rgb(234,237,237);";

  const isInvalid = password === "" || email === "";
  const error = null;

  return (
    <div>
      <form>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "0.8rem",
            textAlign: "left",
            marginLeft: "8rem",
          }}
        >
          E-mail
        </p>
        <input
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder=""
          style={{ width: "14rem" }}
        />
        <br />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "0.8rem",
            textAlign: "left",
            marginLeft: "8rem",
          }}
        >
          Password
        </p>
        <input
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder=""
          style={{ width: "14rem" }}
        />
        <br />
        <button
          onClick={login}
          disabled={isInvalid}
          type="submit"
          style={{
            width: "14rem",
            paddingTop: "5px",
            paddingBottom: "5px",
            borderRadius: "0.3rem",
            background: "linear-gradient(#fada5f, #f0c14b)",
            border: "1px solid black",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          Accedi
        </button>
        <p
          style={{
            color: "lightgray",
            fontSize: "0.8rem",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Registrando un nuovo account acconsenti al trattamento dei tuoi dati
          personali etc. etc.
        </p>
        <button
          onClick={register}
          disabled={isInvalid}
          type="submit"
          style={{
            width: "14rem",
            paddingTop: "5px",
            paddingBottom: "5px",
            borderRadius: "0.3rem",
            background: "linear-gradient(whitesmoke, lightgrey)",
            border: "1px solid black",
            marginTop: "15px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Registra un nuovo account
        </button>

        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}

const SignInForm = withRouter(SignInFormBase);

export default SignInPage;

export { SignInForm };
