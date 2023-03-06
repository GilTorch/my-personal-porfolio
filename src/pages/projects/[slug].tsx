import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import CarretRight from '../../../public/images/projects/details/carret_right.png'
import { Header, Footer,Head } from '@/components'
import { robotoSlab, roboto } from '@/fonts' // <-- import styles to be used


export default function Home() {


  return (
    <>
      <Head title="Project Details"/>
      <Header />
      <main className={`${styles.projectDetailsSection} ${styles.main}`}>
        <section className={styles.section}>
          <div className={styles.projectDetailsSectionInner}>
            <div className={styles.projectDetailsCol1}>
              aaa
            </div>
            <div className={styles.projectDetailsCol2}>
              <div className={styles.projectDetailsCol2Inner}>
                <div className={styles.projectDetailsTitleContainer}>
                  <Link href="/">
                    <Image alt="Carret Right" src={CarretRight} width={26} height={31} />
                  </Link>
                  <h1 className={`${styles.projectDetailsTitle} ${robotoSlab.className}`}>Kay Rapid</h1>
                </div>
                <div className={`${roboto.className} ${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <div className={`${roboto.className} ${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <div className={`${roboto.className} ${styles.projectDetailsPragraph} ${styles.projectDescription}`}>
                  Tech Stack: React Native, ApolloClient, React Navigation, NodeJS, ExpressJS, GraphQL Yoga
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
