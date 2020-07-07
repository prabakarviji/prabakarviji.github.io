import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ margin: 0, flex: 0.8 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `1rem`,
            fontWeight: 550,
          }}
        >
          {siteTitle}
        </Link>
      </div>

      <div
        style={{
          margin: 0,
          flex: 0.2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `0.9rem`,
            fontWeight: 500,
            paddingRight: 10,
          }}
        >
          Home
        </Link>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `0.9rem`,
            fontWeight: 500,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          Blog
        </Link>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `0.9rem`,
            fontWeight: 500,
            paddingLeft: 10,
          }}
        >
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
