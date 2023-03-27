import { useEffect, useState } from 'react'
import Link from 'next/link'
import GilbertLogo from '../../public/svg/gilbert-logo.svg'
import styles from '@/styles/Header.module.css'
import { RefObject } from 'react'
import { Menu, Close } from '@mui/icons-material'


type Props = {
  sectionRefs: Array<RefObject<HTMLDivElement>>;
  onMobile: boolean;
  onBioLinkPressed: Function;
}

type LinkData = {
  label: string;
  sectionRef: RefObject<HTMLDivElement>
}

const Header: React.FC<Props> = ({ sectionRefs, onMobile, onBioLinkPressed }) => {

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

  const onLinkPressed = (link: LinkData) => {
    let yOffset = -325
    if(link.label == "Bio"){
        onBioLinkPressed()
    }

    const sectionRef = link.sectionRef

    if(sectionRef && sectionRef.current){
      const y =  sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: "smooth"})
    }

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
              <Close htmlColor="#EFC900"/>
            ):(
              <Menu htmlColor='#EFC900' />
            )}
          </div>
        )
      }
    <nav style={{display: navbarVisible ? "block" : "none"}} className={`${styles.nav} slide-up `}>
      <ul className={styles.links}>
        <Link href="/" className={styles.logo}>
          <GilbertLogo />
        </Link>
        {links.map((link,index) => (
          <li key={index} className={styles.link} onClick={() => onLinkPressed(link)}>
            {link.label}
          </li>
        ))}
        <li className={styles.resume}>
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

