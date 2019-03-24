import React, {Component} from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styles from "../meSass/index.scss";
import Layout from "../layout/main";
import api from "../api";
import PostLink from "../blocks/postLink";
import PageWrapper from "../components/PageWrapper";


class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    static async getInitialProps({query: {query}}) {
        const posts = await api.posts().search(query).embed()
        return {query, posts}
    }

    render() {
        const {posts, mainMenu} = this.props;

        return (
            <Layout mainMenu={mainMenu}>
                <section className={styles.WelcomeBlock}>
                    <h2 className={styles.Title}>Search results for…</h2>
                    <h4 className={styles.Motto}>{this.props.query}</h4>
                </section>
                <section className={styles.PostGrid}>
                    {typeof posts !== "undefined" && posts.map(post => (
                        typeof post !== "undefined" &&
                        <PostLink
                            key={post.id}
                            link={{
                                pathname: "/post/",
                                query: {
                                    slug: post.slug
                                }
                            }}
                            linkAs={{
                                pathname: "/post/" + post.slug,

                            }}
                            img={typeof post._embedded["wp:featuredmedia"] !== "undefined" ? post._embedded['wp:featuredmedia'][0].source_url : false}
                            title={post.title.rendered}
                            date={post.date}
                            excerpt={post.excerpt.rendered}
                            category={post._embedded["wp:term"][0][0].name !== "Uncategorized" ? post._embedded["wp:term"][0][0].name : false}
                            author={post._embedded.author[0].name}
                            authorImage={post._embedded.author[0].avatar_urls[48]}
                        />
                    ))}
                </section>
            </Layout>
        )
    }
}

export default PageWrapper(Search);