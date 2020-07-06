import React from "react"
import Layout from "../components/layout"
import Logo from "../images/avatar.png"
import SEO from "../components/seo"
import Styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.container}>
      <span role="img" aria-label="waving" style={{ paddingRight: 20 }}>
        👋&nbsp;&nbsp; I'm
      </span>
      <h1 className={Styles.title}>Prabakaran Marimuthu</h1>
      <img src={Logo} alt="Logo" className={Styles.avatar} />
      <p className={Styles.desc}>
        I'm an avid fan of Tesla and Iron Man. I strongly believe that great
        things resulting from hard work
      </p>
    </div>
  </Layout>
)

export default IndexPage
