import React, {Component} from "react";
import Link from "next/link";
import styles from "../styles/layouts/footer.scss";

class Header extends Component {
    constructor(props, req) {
        super(props);
    }

    render() {
        return (

            <footer className={styles.pageFooter}>
                <div className={styles.container}>
                    <p>2019 © Made with ♥ by Blanik.me</p>

                    <p>Powered by NextJS & ReactJS</p>

                    <p>Content source:
                        <Link href="https://blog.mozilla.org/">
                            <a>
                            blog.mozilla.org/
                            </a>
                        </Link>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Header;