import React, { Component } from "react";
import Link from "next/link";
import styles from "../styles/components/social.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default class Search extends React.Component {
    constructor(props, req) {
        super(props);
    }

    render() {
        return(
            <div className={styles.social}>
                <nav className={styles.navigation}>
                    <a className={styles.navItem}>
                    <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a className={styles.navItem}>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a className={styles.navItem}>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </nav>
            </div>
        )
    }
}