import api from "../api";
import React, {Component} from "react";
import Link from "next/link"
import styles from "../styles/pages/home.scss";
import Layout from "../layout/main";
import Header from "../layout/header";

import Welcome from "../components/welcome";
import PostGrid from "../components/postGrid";

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    static async getInitialProps() {
        const posts = await api.posts().embed()
        return {posts}
    }

    render() {
        const {posts, mainMenu} = this.props;

        return (
            <Layout>
                <div className={styles.container}>
                    <Welcome/>
                    <PostGrid items={this.props.posts}/>
                </div>
            </Layout>
        )
    }
}

export default Index;