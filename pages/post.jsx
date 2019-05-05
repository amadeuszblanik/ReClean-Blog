import api from "../api";
import React from 'react'
import Layout from "../layout/main";
import BlogpostHeader from "../components/blogpostHeader";
import styles from "../styles/pages/post.scss";

export default class extends React.Component {
    static async getInitialProps({ query: { slug }, req }) {
        const post = await api.posts().slug(slug).embed();
        let location = false;
        if (req) {
            location = req.protocol + '://' + req.get('host') + req.originalUrl;
        }

        return { slug, post: post[0], location };
    }

    render() {
        console.log(this.props.post);
        return (
            <Layout>
                <div className={styles.container}>
                    <BlogpostHeader categories={this.props.post._embedded['wp:term'][0]}
                                    title={this.props.post.title.rendered}
                                    date={new Date(this.props.post.date)}
                                    author={this.props.post._embedded.author[0].name}
                                    cover={this.props.post._embedded["wp:featuredmedia"]}/>
                    <div className={styles.post}>
                        <article className={styles.content}
                                 dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}/>
                    </div>
                </div>
            </Layout>
        )
    }
}


