import api from "../api";
import React from 'react'
import styles from "../styles/pages/post.scss";

export default class extends React.Component {
    static async getInitialProps({query: {slug}, req}) {
        const post = await api.posts().slug(slug).embed();
        let location = false;
        if (req) {
            location = req.protocol + '://' + req.get('host') + req.originalUrl;
        }

        return {slug, post: post[0], location};
    }

    render() {
        return (
            <div>
                <h1>My {this.props.id} blog post</h1>
                <p>
                    <section className={styles.content} dangerouslySetInnerHTML={{ __html: this.props.post.content.rendered }}/>
                </p>
            </div>
        )
    }
}


