import React from 'react'
import styles from '@/styles/Button.module.css'

type Props = {
    children: string | React.ReactNode | React.ReactNode[];
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({ children, disabled = false, type = "button" }) => {
    return (
        <button className={styles.button} type={type} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;