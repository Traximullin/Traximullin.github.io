// Functional
import React from "react"
// Next-router
import { useRouter } from 'next/router';
// Styles
import styles from "./Title.module.scss"

const Title = ({children, tagline}) => {

    const { back } = useRouter()

    return(
        <div className={styles["title"]}>
            <span 
                className={styles["title__back"]}
                onClick={back}
            >
                &#8592; Назад
            </span>
            <h1 className={styles["title__text"]}>
                {children}
            </h1>
            <span className={styles["title__sub-text"]}>{tagline}</span>
        </div>
    )
}

export default React.memo(Title)
