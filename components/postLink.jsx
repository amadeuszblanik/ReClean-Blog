import Link from "next/link";
import React from "react";
import styles from "../styles/components/postLink.scss";

class PostLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link href={this.props.link} as={this.props.linkAs}>
        <a className={styles.PostLink}>
          <figure className={styles.Thumbnail} style={{ backgroundImage: `url(${this.props.img})` }}></figure>
          <article className={styles.Content}>
            <div className={styles.Category}>
              {this.props.category}
            </div>
            <h2 className={styles.Title} dangerouslySetInnerHTML={{ __html: this.props.title }}></h2>
            <div className={styles.Excerpt} dangerouslySetInnerHTML={{ __html: this.props.excerpt }}></div>
            <div className={styles.Author}>
              <span className={styles.Photo} style={{ backgroundImage: `url(${this.props.authorImage})`}}></span>
              <span className={styles.Name}>{this.props.author}</span>
            </div>
          </article>
        </a >
      </Link >
    )
  }
}

export default PostLink;