// Functional
import React from "react"
// Next-link
import Link from "next/link"
// Styles
import styles from "./A.module.scss"

const A = ({ href, children, ...props }) => {

    const currentClasses = [styles["link"]]

    return (
        <div
            className={currentClasses.join(" ")}
            {...props}
        >
            <Link
                href={href}
            >
                {children}
            </Link>
        </div>
    )

}

export default A
