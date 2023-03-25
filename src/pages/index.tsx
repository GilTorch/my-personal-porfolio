import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import ProfilePicImage from '../../public/images/professional_profile_pic.jpeg'
import { Header, Footer, Head } from '@/components'
import { roboto, robotoSlab } from '@/fonts'
import { skillsData, projects, certifications } from '@/utils/data'

type Email = {
  email: string;
  name: string;
  message: string;
}

export default function Home() {

  const bioRef = useRef<HTMLDivElement>(null)
  const expertiseAndSkillsRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const [onMobile, setOnMobile] = useState<boolean>(false)
  const [contactFormData, setContactFormData] = useState<Email>({email: "",name: "", message: ""})
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)
  const [FormMessageSent, setFormMessageSent] = useState(false)
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

    try {
      setFormSubmitLoading(true)
      await fetch(`http://locahost:3000/api/contact`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactFormData)
      })
      setFormMessageSent(true)
      setFormSubmitLoading(false)
    }catch(e){
      setFormSubmitLoading(false)
    }

   }
 
  const renderSubmitButtonLabel = () => {
    let label = "Send your message"

    if(formSubmitLoading){
      label = "Sending your message..."
    } 

    if(FormMessageSent){
      label = "Sent!"
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
            <h1 className={robotoSlab.className}>
              My name is Gilbert Torchon
            </h1>
            <p className={`${roboto.className} ${styles.bioParagraph}`}>
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
          <h2 className={robotoSlab.className}>Expertise & Skills <span className={`${roboto.className} ${styles.hint}`}>({onMobile ? "Click" : "Hover"} on the skill category to see skills)</span></h2>
          <div className={styles.skillCards}>
            {skillsData.map((skill,index) => (
              <div key={index}  className={styles.skillCardBox}>
                <div className={styles.skillCard}>
                  <div 
                    className={styles.skillCardFront}
                  >
                    <Image alt={`${skill.category} Skill`} src={skill.backgroundImage} style={{objectFit: 'cover', opacity: 0.5}} fill/>
                    <div className={styles.skillCardFrontLabelContainer}>
                      <p className={roboto.className}>{skill.category}</p>
                    </div>
                  </div>
                  <div   key={index} className={styles.skillCardBack}>
                    <div className={styles.skillCardBackInnerWrapper}>
                      <h3 className={roboto.className}>{skill.category}</h3>
                      {skill.subCategories.map((subCategory,index) => (
                        <div key={index} className={styles.skillCardBackGroup}>
                          <h4 className={roboto.className}>{subCategory.title}</h4>
                          <p className={roboto.className}>{subCategory.skills.join(", ")}</p>
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
          <div className={styles.contactCol1}>
            <h2 className={robotoSlab.className}>
              Let&apos;s build something AWESOME!
            </h2>
          </div>
          <div className={styles.contactCol2}>
            <form onSubmit={onSubmit} className={`${styles.form} ${roboto.className}`}>
              <h3 className={`${roboto.className} ${styles.formTitle}`}>
                Drop me a Message
              </h3>
              <p className={`${roboto.className} ${styles.formSubtitle}`}>
                I&apos;&apos;d LOVE to hear from you!
              </p>
              <div className={styles.formGroup}>
                <label className={`${roboto.className} ${styles.label}`}>Your name</label>
                <input onChange={handleChange} placeholder='Ex: John Doe' className={styles.name} name="name" required/>
              </div>
              <div className={styles.formGroup}>
                <label className={`${roboto.className} ${styles.label}`}>Email address</label>
                <input onChange={handleChange} placeholder='Ex: john@doe.com' className={styles.email} type="email" name="email" required/>
              </div>
              <div className={styles.formGroup}>
                <label className={`${roboto.className} ${styles.label}`}>Your message</label>
                <textarea onChange={handleChange} className={`${roboto.className}`} placeholder="Ex: Hi Gilbert! Let's work together" rows={10} name="message" required></textarea>
              </div>
              <div className={styles.formGroup}>
                <button disabled={formSubmitLoading} type="submit" className={styles.formSubmitButtons}><span className={roboto.className}>{renderSubmitButtonLabel()}</span></button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
