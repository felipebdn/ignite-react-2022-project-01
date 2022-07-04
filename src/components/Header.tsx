import styles from './Header.module.css'
import igniteLogo from '../assets/logo-ignite.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
      <strong>Ignite Feed</strong>
    </div>
  )
}