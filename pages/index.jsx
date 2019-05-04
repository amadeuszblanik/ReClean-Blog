import React, { Component } from "react";
// import Link from "next/link";
// import fetch from "isomorphic-unfetch";
import styles from "../styles/pages/home.scss";
import Layout from "../layout/main";
import api from "../api";
import PostLink from "../components/postLink";
import PageWrapper from "../components/PageWrapper";


class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    const posts = await api.posts().embed()
    return { posts }
  }

  render() {
    const { posts, mainMenu } = this.props;

    return (
      <Layout mainMenu={mainMenu}>
        <section className={styles.WelcomeBlock}>
          <h2 className={styles.Title}>Reclean</h2>
          <h4 className={styles.Motto}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
        </section>
        <section className={styles.PostGrid}>
        {posts.map(post => (
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
            imgAlt={typeof post._embedded["wp:featuredmedia"] !== "undefined" ? post._embedded['wp:featuredmedia'][0].alt_text : false}
            title={post.title.rendered}
            date={post.date}
            excerpt={post.excerpt.rendered }
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

export default PageWrapper(Index);