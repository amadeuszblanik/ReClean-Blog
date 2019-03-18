import React from "react";
import Link from "next/link";
import Layout from "../layout/main";
import api from "../api";
import FloatingHeader from "../blocks/floatingHeader";
import styles from "../meSass/index.scss";
import FacebookProvider, { Comments } from "react-facebook-sdk";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postDate: {
        timestamp: '',
        formatted: ''
      },
      progress: 0,
    }
  }
  static async getInitialProps({ query: { slug }, req }) {
    const post = await api.posts().slug(slug).embed();
    let location = false;
    if (req) {
      location = req.protocol + '://' + req.get('host') + req.originalUrl;
    }
    
    return { slug, post: post[0], location };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let progress = (((-1 * this.articleContent.getClientRects()[0].top) + window.innerHeight / 4) / this.articleContent.clientHeight ) * 100;
    this.setState({progress: progress});
  }

  componentWillMount() {
    this.setState({
      postDate: {
        timestamp: (new Date(this.props.post.date)).toLocaleDateString(),
        formatted: (new Date(this.props.post.date)).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
      }
    });
  }

  render() {
    const { post } = this.props;
    return (
      <Layout>
        <article className={styles.post} ref={articleContent => {this.articleContent = articleContent;}}>
          <FloatingHeader progress={this.state.progress} title="ReCleanBlog" postTitle={post.title.rendered} location={this.props.location} />
          <header className={styles.header}>
            <section className={styles.meta}>
              <time className={styles.date} dateTime={this.state.postDate.timestamp}>{this.state.postDate.formatted}</time>
              <span className={styles.divider}>/</span>
              <a href="#" className={styles.category}>
              {post._embedded['wp:term'][0][0].name}
              </a>
              <span className={styles.author}>
                By {post._embedded.author[0].name}
              </span>
            </section>
            <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {!!post._embedded['wp:featuredmedia'] &&
              <figure className={styles.thumbnail} style={{backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})`}}></figure>
            }
          </header>
          <section className={styles.content} dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
          <aside className={styles.comments}>
            <FacebookProvider appId="826812527673004">
              <Comments href={post.link} />
            </FacebookProvider>
          </aside>
        </article>
      </Layout>
    )
  }
}
