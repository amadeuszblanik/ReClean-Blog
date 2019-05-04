import React, {Component} from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styles from "../styles/pages/category.scss";
import Layout from "../layout/main";
import api from "../api";
import PostLink from "../components/postLink";
import PageWrapper from "../components/PageWrapper";


class Category extends React.Component {
    constructor(props) {
        super(props)
    }

    static async getInitialProps({query: {catId}}) {
        const posts = await api.posts().categories( catId );
        return {catId, posts}
    }

    render() {
        const {posts, mainMenu, catId} = this.props;

        if (typeof window === 'object') {
            console.log('TODO: remove', {catId, posts, mainMenu});
        }

        return (
            <Layout mainMenu={mainMenu}>
                <section className={styles.WelcomeBlock}>
                    <h2 className={styles.Title}>Posts in category…</h2>
                    <h4 className={styles.Motto}>{this.props.slug}</h4>
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
                            img={typeof post._embedded !== "undefined" && typeof post._embedded["wp:featuredmedia"] !== "undefined" ? post._embedded['wp:featuredmedia'][0].source_url : false}
                            title={post.title.rendered}
                            date={post.date}
                            excerpt={post.excerpt.rendered}
                            category={typeof post._embedded !== "undefined" && post._embedded["wp:term"][0][0].name !== "Uncategorized" ? post._embedded["wp:term"][0][0].name : false}
                            author={typeof post._embedded !== "undefined" && post._embedded.author[0].name}
                            authorImage={typeof post._embedded !== "undefined" && post._embedded.author[0].avatar_urls[48]}
                        />
                    ))}
                </section>
            </Layout>
        )
    }
}

export default PageWrapper(Category);