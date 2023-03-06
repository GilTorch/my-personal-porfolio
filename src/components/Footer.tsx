import { roboto } from '../fonts'
import styles from '@/styles/Home.module.css'


const Footer = () => (
    <footer>
    <p className={roboto.className}>Created with love by <span className={`${roboto.className} ${styles.me}`}>Gilbert Torchon</span></p>
</footer>
)

export default Footer