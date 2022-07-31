// Functional
import React from "react"
// Styles 
import styles from "./Container.module.scss"
// Local component
import Header from "../../components/Header/Header"

const Container = React.memo(function Container({ children }) {
    
    return (
        <div className={styles["container"]}>
            <Header/>
            <div className={styles["container__content"]}>
                {children}
            </div>
        </div>
    )
})

export default Container 
