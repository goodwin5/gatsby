import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ClassfiBlog = (location) => (
   
  <StaticQuery
  query={graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`}

render={data =>  <pre>{JSON.stringify(data, null, 4)}</pre>}
></StaticQuery>

)

export default ClassfiBlog
