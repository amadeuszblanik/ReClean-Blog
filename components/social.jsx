import React, { Component } from "react";
import Link from "next/link";
import styles from "../styles/components/social.scss";

export default class Search extends React.Component {
    constructor(props, req) {
        super(props);
    }

    render() {
        return(
            <div className={styles.social}>
                Social
            </div>
        )
    }
}