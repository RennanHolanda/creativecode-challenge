import styles from './NewPhone.module.css'

import FormPhone from '../components/Project/FormPhone'

const NewPhone = () => {
  return (
    <div id={styles.phone}>
      <h2>CADASTRAR TELEFONE</h2>
      <FormPhone btnText="Cadastrar"/>
    </div>
  )
}

export default NewPhone