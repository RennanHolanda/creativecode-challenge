
import FormLogin from "../components/Project/FormLogin";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div id={styles.home}>
      <h2>LOGIN</h2>
      <FormLogin btnText="Entrar"/>
    </div>
  )
}

export default Home