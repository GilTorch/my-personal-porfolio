import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HeartImage from '../../public/images/heart.png'

const Footer = () => (
    <footer>
        <p>Created with {"     "}
        <Image alt="heart image" className={styles.heart} src={HeartImage} width={20} height={20} />
        {"   "}by 
        <Link className={`${styles.me}`} target="_blank" href="https://www.linkedin.com/in/gilbert-torchon-22a9a1a4/">
            <span className={`${styles.heart}`}>
               {"   "}Gilbert Torchon
            </span>
        </Link>
        </p>
    </footer>
)

export default Footer