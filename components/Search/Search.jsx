// Functional
import React, { useState } from "react"
// Next-router
import Router from "next/router";
// Styles
import styles from "./Search.module.scss"

const Search = () => {

    const [ search,setSearch ] = useState("")
    
    return (
        <div className={styles["search"]}>
            <input
                value={search}
                onChange={({target}) => setSearch(target.value)}
                className={styles["search__input"]}
                type="text"
            />
            <button
                className={styles["search__button"]}
                onClick={() => {
                    setSearch("")
                    Router.push(`/`)
                }}
            >
                Сбросить
            </button>
            <button
                className={styles["search__button"]}
                onClick={() => Router.push(`?beer_name=${search}`)}
            >
                Найти
            </button>
        </div>
    )

}

export default Search
