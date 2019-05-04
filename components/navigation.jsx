import React, { Component } from "react";
import Link from "next/link";
import styles from "../styles/components/navigation.scss";

export default class Navigation extends React.Component {
    constructor(props, req) {
        super(props);
    }

    makeNavBlock(name, id) {
        let linkUrl = {
            href: "/category?id=" + id,
            id: "/category/" + id,
        }
        return(
            <Link href={linkUrl.href} as={linkUrl.as}>
                <a className={styles.navLink}>
                    {name}
                </a>
            </Link>
        )
    }

    render() {
        return(
            <nav className={styles.navigation}>
                <div className={styles.scroll}>
                    {this.makeNavBlock("Technology", "technology")}
                    {this.makeNavBlock("Sample", "sample")}
                    {this.makeNavBlock("Yet another category", "")}
                </div>
            </nav>
        )
    }
}