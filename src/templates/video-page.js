import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const VideoPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article>
        <header>
          <h1>
            {post.frontmatter.title}
          </h1>
          <p>
            {post.frontmatter.date}
            <iframe
              title="main-video"
              allowFullScreen="allowFullScreen"
              src={`https://www.youtube.com/embed/${post.frontmatter.youtube_id}?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
              width="100%"
              height="600"
              allowtransparency="true"
              frameBorder="0" />
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </article>
    </Layout>
  )
}

export default VideoPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        youtube_id
        season
        episode
        duration
      }
    }
  }
`