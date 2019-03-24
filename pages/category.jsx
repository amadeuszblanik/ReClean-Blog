import React, {Component} from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styles from "../meSass/index.scss";
import Layout from "../layout/main";
import api from "../api";
import PostLink from "../blocks/postLink";
import PageWrapper from "../components/PageWrapper";


class Category extends React.Component {
    constructor(props) {
        super(props)
    }

    static async getInitialProps({query: {slug}}) {
        const catId = await api.categories().slug(slug).then(function (cat) {
            if (typeof cat === 'object') {
                if (typeof cat[0] === 'object') {
                    return cat[0].id;
                }
            } else {
                return 0;
            }
        });
        console.log({catId});
        const posts = await api.posts().categories(catId).embed()
        return {slug, posts}
    }

    render() {
        const {posts, mainMenu} = this.props;

        return (
            <Layout mainMenu={mainMenu}>
                <section className={styles.WelcomeBlock}>
                    <h2 className={styles.Title}>Posts in category…</h2>
                    <h4 className={styles.Motto}>{this.props.slug}</h4>
                </section>
                <section className={styles.PostGrid}>
                    {posts.map(post => (
                        typeof post !== 'undefined' &&
                        <PostLink
                            key={post.id}
                            link={{
                                pathname: '/post/',
                                query: {
                                    slug: post.slug
                                }
                            }}
                            linkAs={{
                                pathname: '/post/' + post.slug,

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

export default PageWrapper(Category);