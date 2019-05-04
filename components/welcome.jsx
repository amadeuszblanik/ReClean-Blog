import React, { Component } from "react";
import styles from "../styles/components/welcome.scss";

export default class Welcome extends React.Component {
    constructor(props, req) {
        super(props);
    }

    render() {
        return(
            <header className={styles.welcome}>
                <article className={styles.article}>
                    <h2 className={styles.pageTitle}><i>Re</i>Clean</h2>
                    <p className={styles.pageDescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </article>
            </header>
        )
    }
}