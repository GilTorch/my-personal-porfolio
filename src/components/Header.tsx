import Link from 'next/Link'
import styles from '@/styles/Home.module.css'
import { roboto, lobster } from '../fonts'

const Header = () => (
    <header>
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={`${styles.logo} ${lobster.className}`}>
          <Link href="/">
            Gilbert <span className={styles.logoCircle}>.</span>
          </Link>
        </li>
        <li className={`${styles.link}  ${roboto.className}`}>
          <Link href="/#bio">
            Bio
          </Link>
          </li>
          <li className={`${styles.link}  ${roboto.className}`}>
          <Link href="/#expertise-and-skills">
            Expertise & Skills
          </Link>
          </li>
          <li className={`${styles.link}   ${roboto.className}`}>
          <Link href="/#portfolio">
            Portfolio
          </Link>
          </li>
        <li className={`${styles.link}   ${roboto.className}`}>
          <Link href="/#certifications">
            Certifications
          </Link>
          </li>
        <li className={`${styles.link}  ${roboto.className}`}>
          <Link href="/#contact">
          Contact
          </Link>
        </li>
        <li className={`${styles.resume} ${roboto.className}`}>
          <Link href="#contact">
          Resume
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header

