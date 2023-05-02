import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button id={styles.btn_logout} onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
