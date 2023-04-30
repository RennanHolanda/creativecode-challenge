import styles from './FormRegister.module.css';

// import { useState } from "react";
import { Link } from "react-router-dom";

import SubmitButton from "../Form/SubmitButton";

function FormRegister({btnText}) {
  return (
    <form id={styles.form_product}>
       <label htmlFor="email">E-mail</label>
      <input
        type="text"
        text="email"
        name="email"
        placeholder="usuario@mail.com"
      /> <br />
         <label htmlFor="emaiç">Repita seu E-mail</label>
      <input
        type="text"
        text="email"
        name="email"
        placeholder="usuario@mail.com"
      /> <br />
       <label htmlFor="passwoard">Senha</label>
      <input
        type="password"
        text="Senha"
        name="password"
        placeholder="****************"
      />
      <div id={styles.area_btn}>
        <SubmitButton text={btnText} />
      </div><br />
      <div>
      <label htmlFor="register">Já tem uma conta?</label>
      <strong>
      <Link to={"/"}>&nbsp;Faça seu Login</Link>
      </strong>
      </div>
    </form>
  );
}

export default FormRegister;
