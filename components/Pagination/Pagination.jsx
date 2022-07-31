// Functional
import React from "react"
// Next-router
import Router, { useRouter } from "next/router"
// Styles
import styles from "./Pagination.module.scss"

const Pagination = () => {

    const { query } = useRouter()

    const handlePaginationClick = (type) => {

        const currentPage = Number(query.page || 1)

        const paginationType = {
            left: currentPage !== 1 ? (currentPage - 1) % 10 : 9,
            right: currentPage !== 9 ? (currentPage + 1) % 10 : 1 
        }

        Router.push(`/?page=${paginationType[type]}`)
    }
 
    return (
        <div className={styles["pagination"]}>
            <p 
                onClick={() => handlePaginationClick("left")}
                className={styles["pagination__item"]}
            >
                &#8592;
            </p>
            <p
                className={styles["pagination__item"]}
            >
                {query.page || 1}
            </p>
            <p 
                onClick={() => handlePaginationClick("right")}
                className={styles["pagination__item"]}
            >
                &#8594;
            </p>
        </div>
    )
}

export default Pagination