import { useEffect, useState } from 'react'
import Link from 'next/Link'
import styles from '@/styles/Header.module.css'
import { roboto, lobster } from '../fonts'
import { MutableRefObject } from 'react'
import CloseButton from './svg/CloseButton'
import HamburgerMenu from './svg/Hamburger'


type Props = {
  sectionRefs: Array<MutableRefObject<null>>;
  onMobile: boolean
}

const Header: React.FC<Props> = ({ sectionRefs, onMobile }) => {

  const [navbarVisible, setNavbarVisible] = useState(true)

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
    const yOffset = -120
    const y =  sectionRef?.current?.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: "smooth"})
  }

  useEffect(() =>{
      setNavbarVisible(!onMobile)
},[onMobile])

  
  return(
    <header>
      {
        onMobile && (
          <div onClick={() => {
            setNavbarVisible((visible) => !visible)
          }} 
          className={`${styles.closeButtonContainer}`}
          >
            {navbarVisible ? (
              <CloseButton/>
            ):(
                <HamburgerMenu />
            )}
          </div>
        )
      }
    <nav style={{display: navbarVisible ? "block" : "none"}} className={`${styles.nav} slide-up `}>
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
          <Link target="_blank" href="https://drive.google.com/file/d/1bHK7xjj9_oZpWoI1kta_4LiHRwTv4Qts/view?usp=share_link">
          Resume
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
}

export default Header

