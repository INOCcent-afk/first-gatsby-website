import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/Product.scss"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <div className="container">
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/Item/${product.slug}`}>more details</Link>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
