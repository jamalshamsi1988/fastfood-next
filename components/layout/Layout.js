import Link from 'next/link';
import styles from './Layout.module.css';
const Layout = ({children}) => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
            <Link href="/">Fast Food</Link>
        </div>
        <div className={styles.right}>
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categories</Link>
        </div>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <a href='https://github.com/jamalshamsi1988' target='_blank'>Jamal Shamsi</a>
            Fast Food | Next.js Project &copy;
      </footer>
    </div>
  )
}

export default Layout
