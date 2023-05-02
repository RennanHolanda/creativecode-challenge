import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./LoginPage.module.css";
import SubmitButton from "../Form/SubmitButton";

const LoginPage = ({ btntext }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div id={styles.login}>
      <h2>Sistema de Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton text={btntext} />
      </form>
    </div>
  );
};

export default LoginPage;
