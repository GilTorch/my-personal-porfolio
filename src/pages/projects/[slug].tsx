import { useRouter } from 'next/router'
import Link from 'next/link'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { allProjectDetails } from '@/utils/data'
import { Footer,Head } from '@/components'


export default function Home() {

  const router = useRouter()
  const { slug } = router.query

  const project = allProjectDetails.find(project => project.slug === slug) ?? { title: null, slug: null, description: "No project exists for this slug.", roles: [], outcome: null}

  return (
    <>
      <Head title="Project Details"/>
      <main className={`${styles.main} ${styles.projectDetailsSection}`}>
        <Script src="https://kit.fontawesome.com/a57b2bf495.js" async/>
        <div className={styles.projectDetailsInner}>
          <section className={styles.section}>
            <div className={styles.projectDetailsSectionInner}>
              <div className={styles.projectDetailsCol2}>
                <div className={styles.projectDetailsCol2Inner}>
                  <div className={styles.projectDetailsTitleContainer}>
                    <Link className={`${styles.chevronRight}`} href="/#portfolio">
                      <ArrowBackIosNewIcon />
                    </Link>
                    <h1 className={styles.projectDetailsTitle}>{project.title}</h1>
                  </div>
                  <div className={`${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
                   {project.description}
                  </div>
                  {project.roles && project.roles.length > 0 && project.roles.map((projectRole,index) => (
                      <div key={index} className={`${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
                        <span className={styles.role}>{projectRole.label} </span>.- {projectRole.description}
                      </div>
                    )
                  )}
                  {project.outcome && (
                    <div className={`${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
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
