import React from "react"

import Layout from "../components/layout"
import Logo from "../images/ironman.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hello World!
      <span role="img" aria-label="waving">
        👋
      </span>
    </h1>
    <img src={Logo} alt="Logo" style={{ width: 150, height: 150 }} />
    <p>The site is under construction</p>
  </Layout>
)

export default IndexPage
