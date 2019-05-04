import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/layouts/header.scss";
import Navigation from "../components/navigation";
import Search from "../components/search";
import Social from "../components/social";

class Header extends Component {
  constructor(props, req) {
    super(props);
  }
  render() {
    return (
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="author" content="Amadeusz David Blanik" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

          <title>ReClean-Blog</title>

          <link rel="apple-touch-icon" sizes="180x180" href="/static/app/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/fapp/avicon-32x32.png" />
          <link rel="icon" type="image/x-icon" href="/static/app/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/app/favicon-16x16.png" />
          <link rel="manifest" href="/static/app/site.webmanifest" />
          <link rel="mask-icon" href="/static/app/safari-pinned-tab.svg" color="#b5418e" />
          <meta name="apple-mobile-web-app-title" content="Blanik.me" />
          <meta name="application-name" content="Blanik.me" />
          <meta name="msapplication-TileColor" content="#0e0d0d" />
          <meta name="theme-color" content="#0e0d0d" />
        </Head>
        <header className={styles.pageHeader}>
          <div className={styles.container}>
            <Link href="/" as="/">
              <a className={styles.branding}>
                <h2><i>Re</i></h2>
              </a>
            </Link>
            <Navigation />
            <Search />
            <Social />
          </div>
        </header>
      </div>
    )
  }
}

export default Header;