import React, { useState } from "react";
import { useContatos } from "../../context/ContactContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styles from "./FormPhone.module.css";

const PhoneList = () => {
  const { contatos, adicionarContato, atualizarContato, removerContato } =
    useContatos();
  const [idAtual, setIdAtual] = useState(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleAddContato = (e) => {
    e.preventDefault();
    if (idAtual === null) {
      adicionarContato(nome, telefone);
    } else {
      atualizarContato(idAtual, nome, telefone);
      setIdAtual(null);
    }
    setNome("");
    setTelefone("");
  };

  const handleEditContato = (contato) => {
    setIdAtual(contato.id);
    setNome(contato.nome);
    setTelefone(contato.telefone);
  };

  const handleDeleteContato = (id) => {
    removerContato(id);
  };

  return (
    <div id={styles.phone}>
      <form onSubmit={handleAddContato}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          Telefone:
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <button id={styles.btn} type="submit">
          {idAtual === null ? "Adicionar" : "Atualizar"}
        </button>
      </form>
      <div>
        <br />
        <h3>Lista Telefônica</h3>
        <Table striped bordered hover variant="dark" id={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato) => (
              <tr key={contato.id}>
                <td>{contato.nome}</td>
                <td>{contato.telefone}</td>
                <td id={styles.area_btn}>
                  <Button
                    variant="primary"
                    onClick={() => handleEditContato(contato)}
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteContato(contato.id)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PhoneList;
