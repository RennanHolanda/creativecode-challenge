import styles from "./Form.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import SubmitButton from "../Form/SubmitButton";

function initialState() {
  return { user: "", password: "" };
}

function FormLogin({ btnText }) {
  const [values, setValues] = useState(initialState);

  function onChange(e) {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <form id={styles.form}>
      <label htmlFor="user">Usuário</label>
      <input
        id="user"
        type="text"
        text="Usuário"
        name="user"
        placeholder="usuario@mail.com"
        onChange={onChange}
        value={values.user}
      />
      <br />
      <label htmlFor="passwoard">Senha</label>
      <input
        id="passwoard"
        type="password"
        text="Senha"
        name="password"
        placeholder="****************"
        onChange={onChange}
        value={values.password}
      />
      <div id={styles.area_btn}>
        <SubmitButton type="submit" text={btnText} />
      </div>
      <br />
      <div>
        <label htmlFor="register">Não tem uma conta?</label>
        <strong>
          <Link to={"/register"}>&nbsp;Registre-se</Link>
        </strong>
      </div>
    </form>
  );
}

export default FormLogin;
