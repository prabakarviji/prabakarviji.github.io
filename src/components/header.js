import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={Styles.header}>
    <div className={Styles.siteTitle}>
      <div style={{ margin: 0, flex: 0.8 }}>
        <Link to="/" className={Styles.siteName}>
          {siteTitle}
        </Link>
      </div>

      <div className={Styles.menuBlock}>
        <Link to="/" className={Styles.menu}>
          Home
        </Link>
        <Link to="/" className={Styles.menu}>
          Blog
        </Link>
        <Link to="/" className={Styles.menu}>
          D/N
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
