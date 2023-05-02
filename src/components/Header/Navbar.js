import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <nav id={styles.nav}>
      <Link to="/">
        <h2>TesteCreativecode</h2>
      </Link>
      <form id={styles.search_form}>
        <BsSearch />
        <input type="text" placeholder="Pesquisar" />
      </form>
      <ul id={styles.nav_links}>
        <li>
          <Link to="/">LOGIN</Link>
        </li>
        <li>
          <Link to="/newphone">CADASTRAR TELEFONE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
