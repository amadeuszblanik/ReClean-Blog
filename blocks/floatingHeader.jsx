import React from "react";
import Link from "next/link";
import styles from "../meSass/index.scss";
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      classNames: []
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      classNames: classNames({
        [styles.floatingHeader]: true,
        [styles.isVisible]: window.scrollY > 200
      })
    })
  }
  componentWillReceiveProps() {
    window.requestAnimationFrame(() => {
      this.progressBar.style.maxWidth = this.props.progress + "%";
      this.progressBar.style.width = this.props.progress + "%";
    })
  }
  render() {
    return(
      <div className={this.state.classNames} data-progress={this.props.progress}>
        <div className={styles.siteTitle}>
          {this.props.title}
        </div>
        <span className={styles.divider}>
          –
        </span>
        <div className={styles.postTitle} dangerouslySetInnerHTML={{ __html: this.props.postTitle }} />
        <div className={styles.postShare}>
          <span className={styles.label}>Share this 👉</span>
          <Link href={"https://twitter.com/home?status=" + this.props.location}>
            <a className={classNames({[styles.shareLink]: true, [styles.twitter]: true })}>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </Link>
          <Link href={"https://www.facebook.com/sharer/sharer.php?u=" + this.props.location}>
            <a className={classNames({[styles.shareLink]: true, [styles.facebook]: true })}>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/shareArticle?mini=true&url=" + this.props.location + "&title=&summary=&source="}>
            <a className={classNames({[styles.shareLink]: true, [styles.linkedin]: true })}>
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
          </Link>
        </div>
        <span className={styles.after} ref={progressBar => {this.progressBar = progressBar;}}></span>
      </div>
    )
  }
}