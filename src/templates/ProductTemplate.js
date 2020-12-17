import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
const ComponentName = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div>
        <Link to="/Product">back to Product</Link>
        <h1>single product</h1>
      </div>
      <section>
        <h1>{title}</h1>
        <Image fixed={fixed} />
        <span>{info}</span>
        <p>{price}</p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
