import styles from './Register.module.css';

import FormRegister from '../components/Project/FormRegister'

const RegisterUser = () => {
  return (
    <div id={styles.register}>
        <h2>REGISTRAR</h2>
        <FormRegister btnText="Registrar"/>
    </div>
  )
}

export default RegisterUser