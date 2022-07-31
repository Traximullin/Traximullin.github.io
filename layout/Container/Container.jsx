// Functional
import React from "react"
import Image from "next/image"
// Styles 
import styles from "./Container.module.scss"
import { SVG } from "../../utils/svg"

const Container = () => {
    
    return (
        <div className={styles["container"]}>
            <div className={styles["container__header"]}>
                <Image
                    src={SVG.beer}
                    alt="logo"
                    width={22}
                    height={18}
                />
            </div>
            <div className={styles["container__content"]}>
                1
            </div>
        </div>
    )
}

export default Container 
