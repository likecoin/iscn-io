import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#28646E`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
        alt={siteTitle}
      >
        <Logo style={{ display: `block`, width: `4rem` }} />
      </Link>
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
