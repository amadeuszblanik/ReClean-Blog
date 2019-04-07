import Link from "next/link";
import styles from "../meSass/index.scss";

const Footer = () => (
    <footer className={styles.Footer}>
        <p>2019 © Made with ♥ by <Link href="https://blanik.me"><a>Blanik.me</a></Link></p>
        <p>Powered by NextJS &amp; ReactJS</p>
        <p>Content source: blog.mozilla.org/</p>
    </footer>
);

export default Footer;
