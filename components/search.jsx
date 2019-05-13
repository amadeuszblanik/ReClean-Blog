import React, {Component} from "react";
import Link from "next/link";
import styles from "../styles/components/search.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default class Search extends React.Component {
    constructor(props, req) {
        super(props);
    }

    render() {
        return (
            <div className={styles.search}>
                <form className={styles.searchForm}>
                    <div className={styles.input}>
                        <input placeholder="What you are looking for…"/>
                    </div>
                    <button className={styles.buttonSubmit}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </div>
        )
    }
}