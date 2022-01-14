import * as React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({location}) => {
 const myfilter = '/blog/java/java-2/'
 const condition =  graphql`
 query {
   allMarkdownRemark(filter:{fields: {slug: {glob: "*{myfilter}*}"}}}, 
   sort: { fields: [frontmatter___date], order: DESC }) {
     nodes {
       excerpt
       fields {
         slug
       }
       frontmatter {
         date(formatString: "MMMM DD, YYYY")
         title
         description
       }
     }
   }
 }
`
 
    return (
        <>{myfilter}
        <StaticQuery query= {condition} render={(data) => (
      
        <>mytest
            {console.log(data)}
        </>)} ></StaticQuery>
       
        </>
      )
}

export default Home
 
 