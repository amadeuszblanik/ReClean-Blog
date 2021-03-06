import React, {Component} from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/layouts/main.scss";
import "../styles/typeface.scss";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import api from "../api";

library.add(faFacebookF, faLinkedinIn, faInstagram, faTwitter);

//import IconNotAllowed from "svg-react-loader?name=Logo!../static/assets/baseline-cloud_off-24px.svg";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGit } from "@fortawesome/free-brands-svg-icons";
//library.add(faGit);

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.LayoutMain}>
                <Header menu={this.props.mainMenu}/>
                <main className={styles.mainApp}>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}
