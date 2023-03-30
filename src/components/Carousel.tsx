import { useEffect, useState} from 'react'
import styles from '@/styles/Carousel.module.css'


type Props = {
    children: React.ReactNode[];
    show: number;
}


const Carousel: React.FC<Props> = ({ children, show }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [length, setLength] = useState<number>(children.length)
    
    const [touchPosition, setTouchPosition] = useState<number | null>(null)

    const handleTouchStart = (e: React.TouchEvent) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])
    
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className={styles.carouselContainer}>
            <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className={styles.carouselWrapper}>
                <div className={styles.carouselContentWrapper}>
                    <div  style={{ transform: `translateX(-${currentIndex * (100/show)}%)` }} className={styles.carouselContent}>
                        {children}
                    </div>
                </div>
                <button onClick={prev} className={styles.leftArrow}>
                    &lt;
                </button>
                <div className={styles.carouselContentWrapper}>
                    { /*...*/ }
                </div>
                {/* You can alwas change the content of the button to other things */}
                <button onClick={next} className={styles.rightArrow}>
                    &gt;
                </button>
            </div>
        </div>
    )
}


export default Carousel