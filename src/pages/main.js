import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { Row, Col, Carousel, Button, Tabs, Tab } from "react-bootstrap"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { BsDownload } from 'react-icons/bs';

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeModal from "../components/subscribe"

let disqusConfig = {
  url: "http://citytree.net",
  identifier: "post id",
  title: "Post title",
}

const IndexPage = ({ data }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const posts = data.allMarkdownRemark.edges.sort((a, b) => {
    console.log(a, b)
    return a.node.frontmatter.episode > b.node.frontmatter.episode ? 1 : -1
  })
  console.log(posts)

  return (
    <Layout>
      <SEO title="Home" />
        <Row className="flex-row-reverse">
          <Col sm={12} lg={4}>
            <h2 className="d-sm-none d-lg-block">Overview</h2>
            <p>Lorem ipsum dolor</p>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Get Notifications
            </Button>
            <SubscribeModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
          <Col sm={12} lg={8}>
            <h2>Season 1 - The End of the World As We Know It</h2>
            <iframe
              className="bg2"
              title="main-video"
              type="text/html"
              width="100%"
              height="412"
              src="https://www.youtube.com/embed/4Ok0gL9xplI?origin=http://citytree.com/cominghome&amp;playsinline=1&amp;color=white&amp;fs=1"
              frameborder="0" />
            <div className="actions">
              <EmailShareButton url="http://citytree.net">
                <EmailIcon round size={32} />
              </EmailShareButton> 
              <FacebookShareButton url="http://citytree.net">
                <FacebookIcon round  size={32} />
              </FacebookShareButton>
              <TwitterShareButton url="http://citytree.net">
                <TwitterIcon round size={32} />
              </TwitterShareButton>
              <WhatsappShareButton url="http://citytree.net">
                <WhatsappIcon round size={32} />
              </WhatsappShareButton>
              <BsDownload />
            </div>
            <Tabs defaultActiveKey="details">
              <Tab eventKey="details" title="Details">
                O thou, my lovely boy, who in thy power Dost hold Time's fickle glass, his fickle hour; Who hast by waning grown, and therein show'st Thy lovers withering, as thy sweet self grow'st. If Nature, sovereign mistress over wrack, As thou goest onwards, still will pluck thee back, She keeps thee to this purpose, that her skill May time disgrace and wretched minutes kill.
              </Tab>
              <Tab
                eventKey="comments"
                title={(
                  <div className="comments-tab">
                    Comments (<CommentCount config={disqusConfig} />)
                  </div>
                )}>
                <Disqus config={disqusConfig} />
              </Tab>
            </Tabs>
            
          </Col>
        </Row>
        <h2>Introduction Videos - A Call to Change</h2>
        <Carousel interval={false} wrap={false}>
          {posts.map(({ node }) => {
            const { slug } = node.fields
            const { title, episode, date, youtube_id } = node.frontmatter
            
            return (
              <Carousel.Item key={slug}>
                <>
                  {youtube_id ? (
                    <Link style={{ boxShadow: `none` }} to={slug}>
                      <img src={`https://img.youtube.com/vi/${youtube_id}/hqdefault.jpg`} alt={title} />
                    </Link>
                  ) : (
                    <div>{date}</div>
                  )}
                  <div>Episode { episode }</div>
                </>
              </Carousel.Item>
            )
          })}
        </Carousel>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            youtube_id
            season
            episode
          }
        }
      }
    }
  }
`
