import React, { Component } from "react";
import Header from "./header";
import "../styles/index.scss";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;