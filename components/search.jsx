import React, { Component } from "react";
import Link from "next/link";
import styles from "../styles/components/search.scss";

export default class Search extends React.Component {
    constructor(props, req) {
        super(props);
    }

    render() {
        return(
            <div className={styles.search}>
                <form className={styles.searchForm}>
                    Search
                </form>
            </div>
        )
    }
}