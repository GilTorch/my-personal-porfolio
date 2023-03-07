import Link from 'next/Link'
import styles from '@/styles/Home.module.css'
import { roboto, lobster } from '../fonts'
import { MutableRefObject } from 'react'


type Props = {
  sectionRefs: Array<MutableRefObject<HTMLDivElement>>
}

const Header: React.FC<Props> = ({ sectionRefs }) => {



  const links = [
    {
      label: "Bio", 
      sectionRef: sectionRefs[0],
    },
    {
      label: "Expertise & Skills", 
      sectionRef: sectionRefs[1],
    },
    {
      label: "Portfolio", 
      sectionRef: sectionRefs[2],
    },
    {
      label: "Certifications", 
      sectionRef: sectionRefs[3],
    },
    {
      label: "Contact",
      sectionRef: sectionRefs[4]
    }
  ]

  const onLinkPressed = (sectionRef: MutableRefObject<HTMLDivElement>) => {
    const yOffset = -100
    const y =  sectionRef?.current?.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: "smooth"})
  }
  
  return(
    <header>
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={`${styles.logo} ${lobster.className}`}>
          <Link href="/">
            Gilbert <span className={styles.logoCircle}>.</span>
          </Link>
        </li>
        {links.map((link,index) => (
          <li key={index} className={`${roboto.className} ${styles.link}`} onClick={() => onLinkPressed(link.sectionRef)}>
            {link.label}
          </li>
        ))}
        <li className={`${styles.resume} ${roboto.className}`}>
          <Link href="#contact">
          Resume
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
}

export default Header

