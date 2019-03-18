import React, { Component } from "react";
import Link from "next/link";
import styles from "../meSass/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NavBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sampleData = ["Another lipsum", "Lifestyle", "Technology", "Travel", "Uncategorized"];
    return(
      <nav className={styles.NavBlock}>
        <div className={styles.Scroll}>
        {sampleData.map(dataEntry => (
          <Link href={dataEntry}>
            <a className={styles.NavLink}>
              {dataEntry}
            </a>
          </Link>
        ))}
        </div>
      </nav>
    )
  }
}

export class SocialBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sampleData = [
      {
        icon: <FontAwesomeIcon icon={["fab", "facebook-f"]} />,
        link: "#facebook"
      },
      {
        icon: <FontAwesomeIcon icon={["fab", "linkedin-in"]} />,
        link: "#linkedin"
      },
      {
        icon: <FontAwesomeIcon icon={["fab", "instagram"]} />,
        link: "#instagram"
      }
    ];
    return(
      <nav className={styles.NavBlock}>
        <div className={styles.Scroll}>
          {sampleData.map(dataEntry => (
            <Link href={dataEntry.link}>
              <a className={styles.NavLink}>
                {dataEntry.icon}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    )
  }
}