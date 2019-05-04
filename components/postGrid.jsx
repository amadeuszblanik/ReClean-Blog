import React, {Component} from "react";
import Link from "next/link";
import styles from "../styles/components/postgrid.scss";

export default class PostGrid extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        console.log(this.props.items);
    }

    postBlock(dataEntry) {
        let data = {
            id: dataEntry.id,
            slug: dataEntry.slug,
            href: "/post?id=" + dataEntry.id,
            as: "/post/" + dataEntry.slug,
            date: dataEntry.date,
            title: dataEntry.title.rendered,
            excerpt: dataEntry.excerpt.rendered,
            category: dataEntry._embedded['wp:term'][0][0].name,
            author: dataEntry._embedded.author[0].name,
            thumbnail: typeof dataEntry._embedded["wp:featuredmedia"] !== "undefined" ? dataEntry._embedded['wp:featuredmedia'][0].source_url : false,
            thumbnailAlt: typeof dataEntry._embedded["wp:featuredmedia"] !== "undefined" ? dataEntry._embedded['wp:featuredmedia'][0].alt_text : false
        }
        return (
            <article className={styles.PostItem}>
                <Link href={data.href}>
                    <a className={styles.PostItemLink}>
                        <figure className={styles.thumbnail}>
                            <img src={data.thumbnail} alt={data.thumbnailAlt}/>
                        </figure>
                        <div className={styles.content}>
                            <span className={styles.category}>{data.category}</span>
                            <h2 className={styles.title} dangerouslySetInnerHTML={{__html: data.title}}/>
                            <div className={styles.excerpt} dangerouslySetInnerHTML={{__html: data.excerpt}}/>
                            <div className={styles.author}>
                                By <span className={styles.name}>{data.author}</span>
                            </div>
                        </div>
                    </a>
                </Link>
            </article>
        )
    }

    render() {
        return (
            <section className={styles.PostGrid}>
                {this.props.items.map(event => this.postBlock(event))}
            </section>
        )
    }
}