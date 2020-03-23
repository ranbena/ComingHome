import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap"
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
import { MdFileDownload } from "react-icons/md";

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeModal from "../components/subscribe"
import VideoCarousel from "../components/video-carousel"
import MainVideo from "../../content/video-posts/S01E00/S01 Intro.mp4"

let disqusConfig = {
  url: "http://citytree.net",
  identifier: "post id",
  title: "Post title",
}

const IndexPage = ({ data }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const edges = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Container className="mb-5">
        <Row className="flex-row-reverse">
          <Col sm={12} lg={4} className="mb-5">
            <h2 className="d-sm-none d-lg-block mt-5">Overview</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Get Notifications
            </Button>
            <SubscribeModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
          <Col sm={12} lg={8} className="main-video-container">
            <h1>Season 1 - Intro</h1>
            <iframe
              className="bg2 main-video"
              title="main-video"
              type="text/html"
              width="100%"
              height="412"
              src="https://www.youtube.com/embed/4bHQXiLrnhk?origin=http://citytree.com/cominghome&amp;playsinline=1&amp;color=white&amp;fs=1"
              frameborder="0" />
            <div className="actions">
              <EmailShareButton url="http://citytree.net/cominghome" className="btn btn-primary" title="Email this page">
                <EmailIcon round size={32} bgStyle={{fill: 'transparent'}} />
              </EmailShareButton> 
              <FacebookShareButton url="http://citytree.net/cominghome" className="btn btn-primary" title="Share on Facebook">
                <FacebookIcon round size={32} bgStyle={{fill: 'transparent'}} />
              </FacebookShareButton>
              <TwitterShareButton url="http://citytree.net/cominghome" className="btn btn-primary" title="Share on Twitter">
                <TwitterIcon round size={32} bgStyle={{fill: 'transparent'}} />
              </TwitterShareButton>
              <WhatsappShareButton url="http://citytree.net/cominghome" className="btn btn-primary" title="Share with Whatsapp">
                <WhatsappIcon round size={32} bgStyle={{fill: 'transparent'}} />
              </WhatsappShareButton>
              <Button href={MainVideo} download className="btn-download" title="Download this video">
                <MdFileDownload />
              </Button>
            </div>
            {/* <Tabs defaultActiveKey="details">
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
            </Tabs> */}
            
          </Col>
        </Row>
      </Container>
      <VideoCarousel edges={edges} season={0} title="Introduction Videos - A Call to Change" bgColor="#f7f8f7" />
      <VideoCarousel edges={edges} season={1} title="Season 1 - The End of The World As We Know It" />
      <VideoCarousel edges={edges} season={2} title="Season 2" />
      <section className="patron">
        <Container>
          <Row>
            <Col sm={12} lg={7}>
              <h2>Become a Patron</h2>
              <strong>Where will your contribution go?</strong>
              <br /><br />
              <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              <Button variant="outline-primary" href="https://www.patreon.com/m/CityTree" target="_blank">Become a Patron</Button>
              </Col>
          </Row>
        </Container>
      </section>
      <section className="community">
        <Container>
          <Row>
            <Col sm={0} lg={4}></Col>
            <Col sm={12} lg={8} className="community-content">
              <h2>Our Wish for the World</h2>
              <br />
              <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </Col>
          </Row>
        </Container>
      </section>
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
            title
            date(formatString: "MMMM DD")
            youtube_id
            season
            episode
            duration
          }
        }
      }
    }
  }
`
