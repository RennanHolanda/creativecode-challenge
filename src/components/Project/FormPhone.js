import styles from "./FormPhone.module.css";


import SubmitButton from "../Form/SubmitButton";

function FormPhone({btnText}) {
  return (
    <form id={styles.phone}>
       <label htmlFor="name">Nome</label>
      <input
        type="text"
        text="Nome"
        name="name"
        placeholder="Digíte seu nome"
      /> <br />
        <label htmlFor="number">Telefone</label>
      <input
        type="text"
        text="phone"
        name="number"
        placeholder="(81) 99999-9999"
      /><br />
      <div id={styles.phone_btn}>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default FormPhone;
