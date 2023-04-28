import styles from "./Form.module.css";

import { useState } from "react";

import Input from "../Form/Input";
import SubmitButton from "../Form/SubmitButton";

function FormLogin({ handleSubmit, btnText, projectData }) {
  const [product, setProduct] = useState(projectData || {});

  const submit = (e) => {
    e.preventDefault();

    handleSubmit(product);
  };

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} id={styles.form_product}>
      <Input
        type="text"
        text="Usuário"
        name="name"
        placeholder="usuario@mail.com"
        handleOnChange={handleChange}
      />
      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="****************"
        handleOnChange={handleChange}
      />
      <div id={styles.area_btn}>
        <SubmitButton type={submit} text={btnText} />
      </div>
    </form>
  );
}

export default FormLogin;
