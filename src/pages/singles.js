import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Link } from "gatsby"
import AlbumsAnimated from "../components/AlbumsAnimated"

const SinglesPage = ({ data }) => (
  <Layout>
    <SEO title="Singles" />
    <section className="section">
      <div className="container mt-6">
        <h1 className="title">Singles</h1>
        <p className="subtitle">
          A new single every month until life returns to normal?
        </p>
      </div>
    </section>

    <section className="section">
      <AlbumsAnimated />
    </section>
  </Layout>
)

export default SinglesPage

export const singlesPageQuery = graphql`
  query SinglesPageTemplate {
    boxedIn: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "FURBABY-boxed-in-cover-art-no-outline.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    behindTheDoor: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "behind-the-door-cover-art-v2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cocoa: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "cocoa-single-cover.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reachingOut: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "reaching-out-album-art-v2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
