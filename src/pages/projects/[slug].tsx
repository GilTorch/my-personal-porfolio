import { useRouter } from 'next/router'
import Link from 'next/link'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import { Footer,Head,ChevronRight } from '@/components'
import { robotoSlab, roboto } from '@/fonts' // <-- import styles to be used/ <-- import styles to be used

const allProjectDetails = [
  {
    title: "Kay Rapid",
    slug: 'kay-rapid',
    description: "Kay Rapid, is my first \"serious\" React/React Native project. It started as an idea that sparked in my head while I was looking for appartment to rent in Port-au-Prince, Haïti. Anybody living there knows how hard it is in the area. The population mostly speaks french and creole. I wanted to create an Haitian solution to an Haitian problem. So I gathered a team and we brainstorm for a long time to try to create the ideal product. Eventually, we managed to create an unfinished MVP with the trending tech at the time . The team that I gathered consisted in two developers and I managed to wear multiple hats in this project:",
    roles: [
      {
        label: "Tech Stack",
        description: "React Native, Apollo Client, React Navigation, GraphQL Yoga, Node JS, Express, Prisma"
      },
      {
        label: "Leadership",
        description: "Being the one that came up with the idea, I became the de factor leader. I basically planned the product meetings and led the standups"
      },
      {
        label: "Full Stack Web and Mobile Developer",
        description: "I worked as a React Native developer and also touched the backend when necessary"
      },
    ],
    outcome: "The project had to stop because of lack of funding. I also lended my first full-time Full Stack Web and Mobile Developer job the same year."
  }
]

export default function Home() {

  const router = useRouter()
  const { slug } = router.query

  const project = allProjectDetails.find(project => project.slug === slug) ?? { title: null, slug: null, description: "No project exists for this slug.", roles: [], outcome: null}

  return (
    <>
      <Head title="Project Details"/>
      <main className={`${styles.projectDetailsSection} ${styles.main}`}>
        <Script src="https://kit.fontawesome.com/a57b2bf495.js" crossorigin="anonymous" async/>
        <div className={styles.projectDetailsInner}>
          <section className={styles.section}>
            <div className={styles.projectDetailsSectionInner}>
              <div className={styles.projectDetailsCol2}>
                <div className={styles.projectDetailsCol2Inner}>
                  <div className={styles.projectDetailsTitleContainer}>
                    <Link href="/#portfolio">
                      <ChevronRight />
                    </Link>
                    <h1 className={`${styles.projectDetailsTitle} ${robotoSlab.className}`}>{project.title}</h1>
                  </div>
                  <div className={`${roboto.className} ${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
                   {project.description}
                  </div>
                  {project.roles && project.roles.length > 0 && project.roles.map((projectRole,index) => (
                      <div key={index} className={`${roboto.className} ${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
                        <span className={styles.role}>{projectRole.label} </span>.- {projectRole.description}
                      </div>
                    )
                  )}
                  {project.outcome && (
                    <div className={`${roboto.className} ${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
                      <span className={styles.role}>Project Outcome</span>.- {project.outcome}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
