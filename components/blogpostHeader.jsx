import React, { Component } from "react";
import styles from "../styles/components/blogpostHeader.scss";

export default class BlogpostHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cover = typeof this.props.cover !== "undefined" && this.props.cover.length > 0 ? this.props.cover[0].source_url : "";
        return(
            <header className={styles.blogpostHeader}>
                <article className={styles.article}>
                    <div className={styles.containerArticle}>
                        <div className={styles.pageDescription}>
                            <span>{this.props.date.toDateString()}</span>
                            <span>/</span>
                            <span>{this.props.categories[0].name}</span>
                        </div>
                        <h2 className={styles.pageTitle}>{this.props.title}</h2>
                    </div>
                    <figure className={styles.coverPhoto}>
                        <img src={cover} />
                    </figure>
                </article>
            </header>
        )
    }
}