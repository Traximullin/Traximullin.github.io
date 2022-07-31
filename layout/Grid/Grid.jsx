import React from "react"
import styles from "./Grid.module.scss"

const Grid = ({ children, gap, gridTemplateColumns }) => {

    return (
        <div 
            className={styles["grid"]}
            style={{
                gridTemplateColumns,
                gap
            }}
        >
            {children}
        </div>
    )
}



export default Grid
