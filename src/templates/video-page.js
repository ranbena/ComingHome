import React from "react"
import { Link, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import ShareActions from "../components/share-actions"

const VideoPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title, season, episode, date, youtube_video_id, youtube_playlist_id } = post.frontmatter
  const pathname = `/${post.fields.slug}`
  const { siteUrl } = data.site.siteMetadata
  
  const episodeText = episode ? `Episode ${episode}` : "Intro"
  const titleText = `Coming Home Season ${season} ${episodeText} - ${title}`

  return (
    <Layout>
      <Seo
        title={titleText}
        banner={`https://img.youtube.com/vi/${youtube_video_id}/hqdefault.jpg`}
        article
        date={date}
        pathname={pathname}
      />
      <Container>
        <article>
          <h1 className="mb-0">{title}</h1>
          <div className="d-flex mb-3 align-items-center">
            <span className="flex-grow-1">Season {season}&nbsp; &middot; &nbsp;{episodeText}&nbsp; &middot; &nbsp;{date}</span>
            <ShareActions url={`${siteUrl}${pathname}`} />
          </div>
          <iframe
            className="video-iframe"
            title="video-page"
            allowFullScreen="allowFullScreen"
            src={`https://www.youtube.com/embed/${youtube_video_id}?listType=playlist&amp;list=${youtube_playlist_id}&amp;ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
            width="100%"
            height="600"
            allowtransparency="true"
            frameBorder="0"
          />
          <section dangerouslySetInnerHTML={{ __html: post.html }} />

          <Link to="/" className="btn btn-primary">Back to Home</Link>
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
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        youtube_video_id
        youtube_playlist_id
        season
        episode
        duration
      }
    }
  }
`