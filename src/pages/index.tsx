import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import styles from '@/styles/Home.module.css'
import ProfilePicImage from '../../public/images/professional_profile_pic.jpeg'
import { Header, Footer, Head, Button } from '@/components'
import { skillsData, projects, certifications, socials } from '@/utils/data'

type Email = {
  subject: string;
  message: string;
}

export default function Home() {

  const bioRef = useRef<HTMLDivElement>(null)
  const expertiseAndSkillsRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const [onMobile, setOnMobile] = useState<boolean>(false)
  const [contactFormData, setContactFormData] = useState<Email>({ subject: '', message: ""})
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)
  const [formMessageSent, setFormMessageSent] = useState(false)
  const [profileImageContainerKey, setProfileImageContainerKey] = useState(0)

  useEffect(() =>{
    const resizeCallBack = () => {
        setOnMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize",resizeCallBack)
    resizeCallBack()

    return () => {
      window.removeEventListener("resize", resizeCallBack)
    }
   },[])


   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormMessageSent(false)
    const name = event.target.name as keyof Email;
    const value = event.target.value;
    const newContactFormData = {...contactFormData}
    newContactFormData[name] = value
    setContactFormData(newContactFormData)
   }

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    window.location.href=`mailto:infotorch2014@gmail.com?subject=${contactFormData.subject}&body=${contactFormData.message}`
   }
 
  const renderSubmitButtonLabel = () => {
    let label = "SEND"

    if(formSubmitLoading){
      label = "SENDING..."
    } 

    if(formMessageSent){
      label = "SENT!"
    }

    return label
  }

  const onBioLinkPressed = () => {
    setProfileImageContainerKey(Math.random())
  }

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
        onBioLinkPressed={onBioLinkPressed}
        onMobile={onMobile}
      />
      <main className={styles.main}>
        <section ref={bioRef} className={styles.section} id="bio">
          <div className={styles.bioSectionCol1}>
            <div key={profileImageContainerKey} className={`${styles.profileImageContainer}`}>
              <Image  alt="Gilbert Torchon" src={ProfilePicImage} style={{objectFit: 'cover'}} fill/>
            </div>
          </div>
           <div className={styles.bioSectionCol2}>
            <h1>
              My name is Gilbert Torchon
            </h1>
            <p className={styles.bioParagraph}>
              I am an experienced Software Developer with a bachelor&apos;s degree in Computer Science. 
              With over 4 years of professional experience in Web and Mobile Development (mostly React and React Native), 
              I have sharpened my skills through boot camps and research. 
              After getting my degree, I was certified in Front End Development by Freecodecamp which led to my first job 
              as a Software Developer. As part of a training program in that job, 
              I was certified by Flatiron School as a Full Stack Web Developer. Because I did really well during my own training, 
              I was chosen to assist my colleagues in their own training. Later on, 
              I self-trained in React Native and lead a team into developing 
              a social mobile media app for students. Fast-forward to today, I joined BairesDev, a nearshore outsourcing company.
            </p>
            <div>
              {socials.map((social,index) => (
                <Link key={index} className={styles.icons} target="_blank" href="https://github.com/GilTorch?tab=repositories">
                  {social.illustration}
                </Link>
              ))}
            </div>
           </div>
        </section>
        <section ref={expertiseAndSkillsRef} className={styles.section} id="expertise-and-skills">
          <h2>Expertise & Skills <span className={` ${styles.hint}`}>({onMobile ? "Click" : "Hover"} on the skill category to see skills)</span></h2>
          <div className={styles.skillCards}>
            {skillsData.map((skill,index) => (
              <div key={index}  className={styles.skillCardBox}>
                <div className={styles.skillCard}>
                  <div 
                    className={styles.skillCardFront}
                  >
                    <Image alt={`${skill.category} Skill`} src={skill.backgroundImage} style={{objectFit: 'cover', opacity: 0.5}} fill/>
                    <div className={styles.skillCardFrontLabelContainer}>
                      <p>{skill.category}</p>
                    </div>
                  </div>
                  <div   key={index} className={styles.skillCardBack}>
                    <div className={styles.skillCardBackInnerWrapper}>
                      <h3>{skill.category}</h3>
                      {skill.subCategories.map((subCategory,index) => (
                        <div key={index} className={styles.skillCardBackGroup}>
                          <h4>{subCategory.title}</h4>
                          <p>{subCategory.skills.join(", ")}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section ref={portfolioRef} className={styles.section} id="portfolio">
          <h2 className={styles.portfolioProjectsTitle}>My Portfolio</h2>
          <div className={styles.portfolioProjects}>
          {projects.map((project,index) => (
            <div key={index}  className={styles.portfolioProject}>
              <div className={styles.portfolioImageContainer}>
                <Link href={`/projects/${project.slug}`}>
                  {project.illustration}
                </Link> 
              </div>
              <p><span className={styles.projectTitle}>{project.title}</span>, {project.caption}</p>
            </div>
          ))}
          </div>
        </section>
        <section ref={certificationsRef} className={styles.section} id="certifications">
          <h2>Certifications</h2>
          <div className={styles.certifications}>
            {certifications.map((certification,index) => (
              <div key={index} className={styles.certification}>
                <div style={{backgroundColor: certification.backgroundColor}} className={styles.certificationImageContainer}>
                    {certification.illustration}
                </div>
                <p>{certification.title}</p>
              </div>
            ))}
          </div>
        </section>
        <section ref={contactRef} className={styles.section} id="contact">
          <div className={styles.contactCol1}>
            <h2 className={styles.contactSectionTitle}>
              Let&apos;s build something AWESOME!
            </h2>
          </div>
          <div className={styles.contactCol2}>
            <form onClick={onSubmit} className={styles.form}>
              <h3 className={styles.formTitle}>
                Drop me a Message
              </h3>
              <p className={styles.formSubtitle}>
                I&apos;&apos;d LOVE to hear from you!
              </p>
              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <input className={styles.formField}  onChange={handleChange} placeholder='Ex: I need your expertise :)' type="text" name="subject" required/>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your message</label>
                <textarea onChange={handleChange} placeholder="Ex: Hi Gilbert! Let's work together" rows={10} name="message" required></textarea>
              </div>
              <div className={styles.formGroup}>
                <Button disabled={formSubmitLoading} type="submit" ><span>{renderSubmitButtonLabel()}</span></Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
