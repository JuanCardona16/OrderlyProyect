import styles from './register.module.css'

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Iniciar sesión</h2>
        <form method="POST" className={styles.form}>
          <div>
            <label htmlFor="name">
              <h4>Correo electronico</h4>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="example@example.com"
              />
            </label>
            <label htmlFor="password">
              <h4>Contraseña</h4>
              <input type="text" name="password" id="password" />
            </label>
          </div>
          <button type="submit">iniciar sesion</button>
        </form>
      </div>
    </div>
  )
}

export default Register