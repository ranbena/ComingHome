import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import SubscribeModal from "../components/subscribe"
import VideoCarousel from "../components/video-carousel"
import MainVideo from "../components/main-video"


const IndexPage = ({ data }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const edges = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Coming Home" />
      <Container className="mb-2">
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
            <MainVideo />
          </Col>
        </Row>
      </Container>
      <VideoCarousel edges={edges} season={1} title="Season 1 - The End of The World As We Know It" bgColor="#f7f8f7" />
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
