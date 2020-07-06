import React from "react"
import Layout from "../components/layout"
import Logo from "../images/avatar.png"
import SEO from "../components/seo"
import Styles from "./index.module.css"
import {
  Github,
  Medium,
  Twitter,
  Instagram,
} from "@styled-icons/boxicons-logos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.container}>
      <span role="img" aria-label="waving" style={{ paddingRight: 20 }}>
        👋&nbsp;&nbsp; I'm
      </span>
      <h1 className={Styles.title}>Prabakaran Marimuthu</h1>
      <img src={Logo} alt="Logo" className={Styles.avatar} />
      <span className={Styles.subTitle}>
        Senior Software Engineer @ Spritle Software
      </span>
      <p className={Styles.desc}>
        I'm an avid fan of Tesla and Iron Man. I strongly believe that great
        things resulting from hard work.
      </p>
      <div>
        <a href={"https://github.com/prabakarviji"}>
          <Github size="40" className={Styles.icons} />
        </a>
        <a href={"https://twitter.com/prabarth_m"}>
          <Twitter size="40" className={Styles.icons} />
        </a>
        <a href={"https://medium.com/@prabart"}>
          <Medium size="40" className={Styles.icons} />
        </a>
        <a href={"http://instagram.com/prabakviji"}>
          <Instagram size="40" className={Styles.icons} />
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
