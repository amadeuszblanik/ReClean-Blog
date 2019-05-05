import React, {Component} from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Layout;