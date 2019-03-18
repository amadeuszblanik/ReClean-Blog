import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../meSass/index.scss";
import api from "../api";
import { NavBlock, SocialBlock } from "../blocks/navBlock";

api.menus = api.registerRoute('menus/v1', '/menus/(?P<id>[a-zA-Z(-]+)');

class SearchBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.state.value);
    if(window && window.location && window.location.pathname) {
      window.location.pathname = "/search/" + this.state.value;
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className={styles.HeaderSearch}>
        <input 
          name="query"
          type="text"
          className={styles.SearchInput}
          placeholder="What are you looking for?"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className={styles.SearchSubmit} type="submit">
          Search
        </button>
      </form>
    )
  }
}


export default class Header extends Component {
  constructor(props, req) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>Reclean Blog — Made with love by Blanik.me</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#b5418e" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <noscript>
            It's seems like your browser is a bit outdated.<br />
            Please <a href="http://outdatedbrowser.com/en">update</a> it or turn on JavaScripts to better performance.
        </noscript>
        <header className={styles.Header}>
          <main className={styles.mainApp}>
            <div className={styles.HeaderLogo}>
              <Link href="/">
                Reclean
              </Link>
            </div>
            <NavBlock />
            <SearchBlock />
            <SocialBlock />
          </main>
        </header>
      </div>);
  }
}