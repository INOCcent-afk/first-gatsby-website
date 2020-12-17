import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const Example = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>Hello Examples!</p>
      <Header />
      <HeaderStatic />
      <h5>author: {author}</h5>
    </Layout>
  )
}
export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default Example
