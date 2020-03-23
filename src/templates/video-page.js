import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const VideoPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title, season, episode, date, youtube_id } = post.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <article>
          <h1>
          Season {season} Ep. {episode}: {title}
          </h1>
          <p>
            {date} <br /><br />
            <iframe
              title="main-video"
              allowFullScreen="allowFullScreen"
              src={`https://www.youtube.com/embed/${youtube_id}?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
              width="100%"
              height="600"
              allowtransparency="true"
              frameBorder="0" />
          </p>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Container>
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