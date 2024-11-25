import { Bell, User } from 'lucide-react'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.container}>
      <h3>¡Bienvenido a OrderlyPro!, [Nombre del usuario]</h3>
      <div>
        <button type='button'>
          <Bell />
        </button>
        <button type='button'>
          <User />
        </button>
      </div>
    </div>
  )
}
