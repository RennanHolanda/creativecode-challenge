import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LogoutButton from "../components/Form/LogoutButton";
import styles from "./WelcomeMessage.module.css";
import { Link } from "react-router-dom";

const WelcomeMessage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div id={styles.welcome}>
      <h2>Bem-vindo, {user.email}!</h2>
      <Link to="/newphone">
        <p>Acessar lista telefônica</p>
      </Link>
      <LogoutButton btnText="Logout"/>
    </div>
  );
};

export default WelcomeMessage;
