// Functuinal
import React from "react"
// Next-router and next-image
import Router from "next/router"
import Image from "next/image"
// Route contans
import { ROUTE } from "../../utils/route"
// Styles
import styles from "./CardProduct.module.scss"

const CardProduct = ({ id, src, name, description, ...props }) => {
    
    return (
        <div 
            onClick={() => Router.push(`${ROUTE.beer}/${id}`)}
            className={styles["card-product"]} 
            {...props}
        >
            <div>
                <Image
                    src={src}
                    alt="avatar"
                    width="100%"
                    height="250px"
                />
            </div>
            <div>
                <p className={styles["card-product__title"]}>
                    {name}
                </p>
                <span className={styles["card-product__description"]}>
                    {
                        description.length > 140 
                            ?
                            `${description.substring(0,137)}...`
                            :
                            description
                    }
                </span>
            </div>
        </div>
    )
}

export default React.memo(CardProduct)
