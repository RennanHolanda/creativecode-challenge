import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "../components/Project/LoginPage";
import WelcomeMessage from "./Welcomemessage";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? <WelcomeMessage /> : <LoginPage btntext="Entrar"/>}
    </div>
  );
};

export default Home;
