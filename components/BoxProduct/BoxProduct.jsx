// Functional
import React from "react"
// Next-image
import Image from "next/image"
// Styles
import styles from "./BoxProduct.module.scss"

const BoxProduct = ({ src, description, abv, foodPairing }) => {
    
    return(
        <div className={styles["box-product"]}>
            <div
                className={styles["box-product__avatar"]}
            >
                <Image
                    src={src}
                    alt="avatar"
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <div className={styles["box-product__content"]}>
                <p className={styles["box-product__description"]}>
                    {description}
                </p>
                <p className={styles["box-product__degree"]}>
                    {abv} %
                </p>
                <p className={styles["box-product__food-pairing"]}>
                    {foodPairing}
                </p>
            </div>
        </div>
    )
}

export default BoxProduct

