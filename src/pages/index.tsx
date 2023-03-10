import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Animated} from "react-animated-css";
import styles from '@/styles/Home.module.css'
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
import { Header, Footer, Head } from '@/components'
import { roboto, lobster, robotoSlab } from '../fonts'

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


const projects = [
  {
    previewImage: SmartPatientImage,
    title: "Smart Patient",
    slug: "smart-patient",
    caption: "a medical app"
  },
  {
    previewImage: ScriptoRerumImage,
    title: "ScriptoRerum",
    slug: "scriptorerum",
    caption: "a mobile app for writers"
  },
  {
    previewImage: MetFeyVetImage,
    title: "Mèt Fèy Vèt",
    slug: "met-fey-vet",
    caption: "a portal for a local politician and activist in Haiti"
  },
  {
    previewImage: HTNImage,
    title: "Haitian Television Network",
    slug: "htn-television-network",
    caption: "a platform to post videos and watch videos posted by others and watch TV"
  },
  {
    previewImage: KayRapidIImage,
    title: "Kay Rapid",
    slug: "kay-rapid",
    caption: "a housing app that help finding a house to rent/buy in Haiti"
  },
  {
    previewImage: ToThePointImage,
    title: "ToThePoint",
    slug: "to-the-point",
    caption: "an social media for students"
  },
]

const certifications = [
  {
    backgroundImage: FreeCodeCampCertificationImage,
    title: "FreeCodeCamp Front End",
  },
  {
    backgroundImage: FlatironSchoolCertificationImage,
    title: "Flatiron Full Stack Web ",
  }
]

export default function Home() {

  const bioRef = useRef(null)
  const expertiseAndSkillsRef = useRef(null)
  const portfolioRef = useRef(null)
  const certificationsRef = useRef(null)
  const contactRef = useRef(null)
  const [skills, setSkills]  = useState(skillsData)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  
  return (
    <>
      <Head />
      <Header 
        sectionRefs={[
          bioRef,
          expertiseAndSkillsRef,
          portfolioRef,
          certificationsRef,
          contactRef,
        ]}
      />
      <main className={styles.main}>
        <section ref={bioRef} className={styles.section} id="bio">
          <div className={styles.bioSectionCol1}>
            <div className={`${styles.profileImageContainer}`}>
              <Image  alt="Gilbert Torchon" src={ProfilePicImage} style={{objectFit: 'cover'}} fill/>
            </div>
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
        <section ref={expertiseAndSkillsRef} className={styles.section} id="expertise-and-skills">
          <h2 className={robotoSlab.className}>Expertise & Skills <span className={`${roboto.className} ${styles.hint}`}>(Hover on the skill category to see skills)</span></h2>
          {/* <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <Image width={300} height={300} src={WebDevImage} alt="Avatar" />
              </div>
              <div className={styles.flipCardBack}>
                <h1>John Doe</h1> 
                <p>Architect & Engineer</p> 
                <p>We love that guy</p>
              </div>
            </div>
          </div> */}
          <div className={styles.skillCards}>
            {skills.map((skill,index) => (
              <div 
                key={index}  
                className={styles.skillCard}
                style={{opacity: selectedSkill === skill.category ? 0: 1}}
                onMouseEnter={() => setSelectedSkill(skill.category)}
                onMouseLeave={() => setSelectedSkill(null)}
              >
                <Image alt={`${skill.category} Skill`} src={skill.backgroundImage} style={{objectFit: 'cover', opacity: 0.5}} fill/>
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
        <section ref={portfolioRef} className={styles.section} id="portfolio">
          <h2 className={robotoSlab.className}>My Portfolio</h2>
          <div className={styles.portfolioProjects}>
          {projects.map((project,index) => (
            <div key={index}  className={styles.portfolioProject}>
              <div className={styles.portfolioImageContainer}>
                <Link href={`/projects/${project.slug}`}>
                  <Image alt="" src={project.previewImage} style={{ objectFit:'cover'}} fill/>
                </Link>
              </div>
              <p className={roboto.className}><span className={styles.projectTitle}>{project.title}</span>, {project.caption}</p>
            </div>
          ))}
          </div>
        </section>
        <section ref={certificationsRef} className={styles.section} id="certifications">
          <h2 className={robotoSlab.className}>Certifications</h2>
          <div className={styles.certifications}>
            {certifications.map((certification,index) => (
              <div key={index} className={styles.certification}>
                <div className={styles.certificationImageContainer}>
                  <Image alt={`${certification.title} Certification`} src={certification.backgroundImage} style={{objectFit:"cover"}} fill/>
                </div>
                <p className={roboto.className}>{certification.title}</p>
              </div>
            ))}
          </div>
        </section>
        <section ref={contactRef} className={styles.section} id="contact">
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
      <Footer />
    </>
  )
}
