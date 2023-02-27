import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Animated} from "react-animated-css";
import styles from '@/styles/Home.module.css'
import { Roboto, Roboto_Slab, Lobster } from '@next/font/google'
import ProfilePicImage from '../../public/images/professional_profile_pic.jpeg'
import BackendDevImage from '../../public/images/skill-cards/backend.jpg'
import MobileDevImage from '../../public/images/skill-cards/mobile.jpg'
import WebDevImage from '../../public/images/skill-cards/web.jpg'
import OtherImage from '../../public/images/skill-cards/other.jpg'
import KayRapidIImage from '../../public/images/projects/kay_rapid.png'
import MetFeyVetImage from '../../public/images/projects/met_fey_vet.jpeg'
import ScriptoRerumImage from '../../public/images/projects/scriptorerum.jpeg'
import SmartPatientImage from '../../public/images/projects/smart_patient.png'
import ToThePointImage from '../../public/images/projects/tothepoint.png'
import HTNImage from '../../public/images/projects/haitian_television_network.png'
import FreeCodeCampCertificationImage from '../../public/images/certifications/fcc_logo.jpeg'
import FlatironSchoolCertificationImage from '../../public/images/certifications/flatiron_school.jpeg'

const lobster = Lobster({
  weight: '400',
  subsets: ['latin']
})

const roboto = Roboto({
  weight: ['400','500','700'],
  subsets: ['latin']
})

const robotoSlab = Roboto_Slab({
  subsets:["latin"],
})

const skillsData = [
  {
    category: "Web Skills",
    backgroundImage: WebDevImage ,
    subCategories: [
      {
        title: "Language(s) and Framework(s)",
        skills: [
          "Javascript", "NextJS", "ReactJS"
        ]
      },
      {
        title: "State Management",
        skills: [
          "Redux.js, React Context, Apollo Client"
        ]
      },
      {
        title: "Navigation",
        skills: [
          "React Router Dom"
        ]
      },
      {
        title: "Design System",
        skills: [
          "Boostrap, Material UI"
        ]
      },
      {
        title: "Unit Testing",
        skills: [
          "Jest, React Testing Library, React Test Renderer"
        ]
      }, 
    ]
  },
  {
    category: "Mobile Development Skills",
    backgroundImage: MobileDevImage,
    subCategories: [
      {
        title: "Language(s) and Framework(s)",
        skills: [
          "React Native", "Expo", "Swift"
        ]
      },
      {
        title: "State Management",
        skills: [
          "Redux.js, React Context, Apollo Client"
        ]
      },
      {
        title: "Navigation",
        skills: [
          "React Navigation"
        ]
      },
      {
        title: "Design System",
        skills: [
          "React Native Paper, Native Base"
        ]
      },
      {
        title: "Unit Testing",
        skills: [
          "Jest, React Native Testing Library, React Test Renderer"
        ]
      }, 
    ]
  },
  {
    category: "Backend Skills",
    backgroundImage: BackendDevImage,
    subCategories: [
      {
        title: "Language(s) and Framework(s)",
        skills: [
          "Javascript", "Ruby", "Ruby on Rails", "Node JS", "Express JS"
        ]
      },
      {
        title: "Web Services Architectures",
        skills: [
          "REST, GraphQL, SOAP"
        ]
      },
      {
        title: "Databases",
        skills: [
          "MySQL, PostgreSQL, MongoDB"
        ]
      },
      {
        title: "Deployment",
        skills: [
          "Heroku, Digital Ocean"
        ]
      },
    ]
  },
  {
    category: "Other Skills",
    backgroundImage: OtherImage,
    subCategories: [
      {
        title: "Graphic Design Tools",
        skills: [
          "Adobe Photoshop, Adobe Illustrator"
        ]
      },
      {
        title: "UX/UI",
        skills: [
          "Figma"
        ]
      },
      {
        title: "Project Management Tools",
        skills: [
          "Clickup, JIRA"
        ]
      },
      {
        title: "Project Management Framework",
        skills: [
          "SCRUM"
        ]
      },
      {
        title: "Version Control",
        skills: [
          "Git / Github"
        ]
      }, 
      {
        title: "CI / CD",
        skills: [
          "Github Actions"
        ]
      }, 
    ]
  },
]


export default function Home() {

  const webDevelopmentSkillCardRef = useRef(null)
  const mobileDevelopementSkillCardRef = useRef(null)
  const backendDevelopemtntSkillCardRef = useRef(null)
  const otherSkillCardRef = useRef(null)

  const [skills, setSkills]  = useState(skillsData)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  
  useEffect(()=> {
    console.log(webDevelopmentSkillCardRef.current)
  },[])


  const onMouseSkillCardEnter = (event: any) => {
    let skillCategory = event.target.alt

    // display skill category 
    setSelectedSkill(skillCategory)
    
  }


  return (
    <>
      <Head>
        <title>Gilbert Torchon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li className={`${styles.logo} ${lobster.className}`}>Gilbert <span className={styles.logoCircle}>.</span></li>
            <li className={`${styles.link}  ${roboto.className}`}>
              <Link href="#bio">
                Bio
              </Link>
              </li>
              <li className={`${styles.link}  ${roboto.className}`}>
              <Link href="#expertise-and-skills">
                Expertise & Skills
              </Link>
              </li>
              <li className={`${styles.link}   ${roboto.className}`}>
              <Link href="#portfolio">
                Portfolio
              </Link>
              </li>
            <li className={`${styles.link}   ${roboto.className}`}>
              <Link href="#certifications">
                Certifications
              </Link>
              </li>
            <li className={`${styles.link}  ${roboto.className}`}>
              <Link href="#contact">
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
      <main className={styles.main}>
        <section className={styles.section} id="bio">
          <div className={styles.bioSectionCol1}>
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className={styles.profileImageContainer}>
              <Image alt="Gilbert Torchon" src={ProfilePicImage} style={{objectFit: 'cover'}} fill/>
            </div>
          </Animated>
          </div>
           <div className={styles.bioSectionCol2}>
            <h1 className={robotoSlab.className}>
              My name is Gilbert Torchon
            </h1>
            <p className={`${roboto.className} ${styles.bioParagraph}`}>
              I am an experienced Software Developer with a bachelor's degree in Computer Science. With over 4 years of professional experience in Web and Mobile Development (mostly React and React Native), I have sharpened my skills through boot camps and research. After getting my degree, I was certified in Front End Development by Freecodecamp which led to my first job as a Software Developer. As part of a training program in that job, I was certified by Flatiron School as a Full Stack Web Developer. Because I did really well during my own training, I was chosen to assist my colleagues in their own training. Later on, I self-trained in React Native and lead a team into developing a social mobile media app for students. Fast-forward to today, I joined BairesDev, a nearshore outsourcing company. I became a core team member in the mobile app team of one of their clients, a FinTech company: Hello Alice.
            </p>
            <div>
              <Link className={styles.icons} target="_blank" href="https://github.com/GilTorch?tab=repositories">
                <Image alt="Linkedin logo" src="/icons/github.png" width="50" height="50" />
              </Link>
              <Link className={styles.icons} target="_blank" href="https://www.linkedin.com/in/gilbert-torchon-22a9a1a4/">
               <Image alt="Linkedin logo" src="/icons/linkedin.png" width="50" height="50" />
              </Link>
            </div>
           </div>
        </section>
        <section className={styles.section} id="expertise-and-skills">
          <h2 className={robotoSlab.className}>Expertise & Skills</h2>
          <div className={styles.skillCards}>
            {skills.map((skill,index) => (
              <div 
                style={{opacity: selectedSkill === skill.category ? 0: 1}} 
                onMouseLeave={() => setSelectedSkill(null)} 
                onMouseEnter={() => setSelectedSkill(skill.category)} 
                key={index}  
                ref={webDevelopmentSkillCardRef} 
                className={`${styles.skillCard}`}
              >
                <Image alt="Web Development Skill" src={skill.backgroundImage} style={{objectFit: 'cover', opacity: 0.5}} fill/>
               <div className={styles.skillCardLabelContainer}>
                <p className={roboto.className}>{skill.category}</p>
               </div>
              </div>
            ))}
          </div>
          <div className={styles.skillCardsOpen}>
            {skills.map((item,index) => (
              <div style={{opacity: selectedSkill === item.category ? 1: 0}}   key={index} className={styles.skillCardOpen}>
                <div className={styles.skillCardOpenInnerWrapper}>
                  <h3 className={roboto.className}>{item.category}</h3>
                  {item.subCategories.map((subCategory,index) => (
                    <div key={index} className={styles.skillCardGroup}>
                      <h4 className={roboto.className}>{subCategory.title}</h4>
                      <p className={roboto.className}>{subCategory.skills.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.section} id="portfolio">
          <h2 className={robotoSlab.className}>My Portfolio</h2>
          <div className={styles.portfolioProjects}>
            <div className={styles.portfolioProject}>
              <div className={styles.portfolioImageContainer}>
                <Image alt="" src={SmartPatientImage} style={{ objectFit:'cover'}} fill/>
              </div>
              <p className={roboto.className}><span className={styles.projectTitle}>Smart Patient</span>, a medical app</p>
            </div>
              <div className={styles.portfolioProject}>
                <div className={styles.portfolioImageContainer}>
                <Image alt="" src={ScriptoRerumImage} style={{ objectFit:'cover'}} fill/>
                </div>
                <p className={roboto.className}><span className={styles.projectTitle}>ScriptoRerum</span>, a mobile app for writers</p>
              </div> 
               <div className={styles.portfolioProject}>
                <div className={styles.portfolioImageContainer}>
                <Image alt="" src={MetFeyVetImage} style={{ objectFit:'cover'}} fill/>
                </div>
                <p className={roboto.className}><span className={styles.projectTitle}>Mèt Fèy Vèt</span>, a portal for a local politician and activist in Haiti</p>
              </div>
              <div className={styles.portfolioProject}>
                <div className={styles.portfolioImageContainer}>
                <Image alt="" src={HTNImage} style={{objectFit: 'cover'}} fill/>
                </div>
                <p className={roboto.className}><span className={styles.projectTitle}>Haitian Television Network</span>, an instagram-like app for students</p>
              </div>
              <div className={styles.portfolioProject}>
                <div className={styles.portfolioImageContainer}>
                <Image  alt="" src={KayRapidIImage} style={{ objectFit:'cover'}} fill/>
                </div>
                <p className={roboto.className}><span className={styles.projectTitle}>Kay Rapid</span>, a housing app that help finding a house to rent/buy in Haiti</p>
              </div>
              <div className={styles.portfolioProject}>
                <div className={styles.portfolioImageContainer}>
                <Image alt="" src={ToThePointImage} style={{ objectFit:'cover'}} fill/>
                </div>
                <p className={roboto.className}><span className={styles.projectTitle}>ToThePoint</span>, an instagram-like app for students</p>
              </div> 
          </div>
        </section>
        <section className={styles.section} id="certifications">
          <h2 className={robotoSlab.className}>Certifications</h2>
          <div className={styles.certifications}>
            <div className={styles.certification}>
              <div className={styles.certificationImageContainer}>
                <Image alt="freeCodeCamp Certification" src={FreeCodeCampCertificationImage} style={{objectFit:"cover"}} fill/>
              </div>
              <p className={roboto.className}>Free Code Camp Front End Certification</p>
            </div>
            <div className={styles.certification}>
              <div className={styles.certificationImageContainer}>
                <Image alt="freeCodeCamp Certification"  src={FlatironSchoolCertificationImage} style={{objectFit:"cover"}} fill/>
              </div>
              <p className={roboto.className}>Flatiron Full Stack Web Developer Certification</p>
            </div>
          </div>
        </section>
        <section className={styles.section} id="contact">
          <div className="contact-col-2">
            <h2 className={robotoSlab.className}>
              Let's build something AWESOME!
            </h2>
          </div>
          <div className="contact-col-2">
            <form className={`${styles.form} ${roboto.className}`}>
              <h3 className={`${roboto.className} ${styles.formTitle}`}>
                Drop me a Message
              </h3>
              <p className={`${roboto.className} ${styles.formSubtitle}`}>
                I'd LOVE to hear from you!
              </p>
              <div className={styles.formGroup}>
                <label className={`${roboto.className} ${styles.label}`}>Your name</label>
                <input placeholder='Ex: John Doe' className={styles.name} name="name" />
              </div>
              <div className={styles.formGroup}>
                <label className={`${roboto.className} ${styles.label}`}>Email address</label>
                <input placeholder='Ex: john@doe.com' className={styles.email} type="email" />
              </div>
              <div className={styles.formGroup}>
                <label className={`${roboto.className} ${styles.label}`}>Your message</label>
                <textarea className={`${roboto.className}`} placeholder="Ex: Hi Gilbert! Let's work together" rows={10} name="message" ></textarea>
              </div>
              <div className={styles.formGroup}>
                <button><span className={roboto.className}>Send your message</span></button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer>
          <p className={roboto.className}>Created with love by <span className={`${roboto.className} ${styles.me}`}>Gilbert Torchon</span></p>
      </footer>
    </>
  )
}
