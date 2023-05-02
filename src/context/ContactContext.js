import React, { createContext, useContext, useState, useEffect } from "react";

const ContatosContext = createContext();

const ContatosProvider = ({ children }) => {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    const contatosSalvos = JSON.parse(localStorage.getItem("contatos"));
    if (contatosSalvos) {
      setContatos(contatosSalvos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contatos", JSON.stringify(contatos));
  }, [contatos]);

  const adicionarContato = (nome, telefone) => {
    const id = Date.now();
    const novoContato = { id, nome, telefone };
    setContatos([...contatos, novoContato]);
  };

  const atualizarContato = (id, nome, telefone) => {
    const novoContato = { id, nome, telefone };
    setContatos(
      contatos.map((contato) => (contato.id === id ? novoContato : contato))
    );
  };

  const removerContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  return (
    <ContatosContext.Provider
      value={{ contatos, adicionarContato, atualizarContato, removerContato }}
    >
      {children}
    </ContatosContext.Provider>
  );
};

const useContatos = () => {
  const context = useContext(ContatosContext);
  if (!context) {
    throw new Error("useContatos deve ser usado dentro do ContatosProvider");
  }
  return context;
};

export { ContatosProvider, useContatos };
