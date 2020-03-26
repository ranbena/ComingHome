import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"
import { MdNotificationsActive } from "react-icons/md"

import Layout from "../components/layout"
import seo from "../components/seo"
import SubscribeModal from "../components/subscribe"
import VideoCarousel from "../components/video-carousel"
import MainVideo from "../components/main-video"


const IndexPage = ({ data }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const edges = data.allMarkdownRemark.edges
  const { siteUrl } = data.site.siteMetadata

  return (
    <Layout>
      <seo title="Coming Home" />
      <Container className="mb-2">
        <Row>
          <Col sm={12} lg={9} className="main-video-container">
            <h1>Introduction - <em>Coronavirus is Calling Us Home</em></h1>
            <MainVideo siteUrl={siteUrl} />
          </Col>
          <Col sm={12} lg={3} className="mb-5">
            <h2 className="d-sm-none d-lg-block mt-5 pt-3">Overview</h2>
            <p>Coming Home is a video series that shares the “home-wisdom” of CityTree, an urban ecological learning center in the heart of Tel Aviv. As we collectively experience a collapse of the world as we know it, Tami Zori invites us to rediscover harmony with all life on Earth by reconnecting to our own bodies and homes.</p>
            <Button variant="primary" onClick={() => setModalShow(true)} className="btn-notifications">
              <MdNotificationsActive /> &nbsp; Get Notifications
            </Button>
            <SubscribeModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </Container>
      <VideoCarousel edges={edges} season={1} title="Season 1 - The End of The World As We Know It" bgColor="#f7f8f7" />
      <VideoCarousel edges={edges} season={2} title="Season 2" placeholder="Arriving March 30th" />
      <section className="patron">
        <Container>
          <Row>
            <Col sm={12} lg={7}>
              <h2>Become a Patron</h2>
              <strong>Where will your contribution go?</strong>
              <br /><br />
              <p>
                It is the contributions from our community members that allow us to keep our home as a living-learning center for urban ecology and an incubator for climate resilience. Challenging the consumer-alienated thinking structures that are embedded in our minds, we like to separate the giving experience into parts that do not weigh against each other in arbitrary monetary values. We pursue a “deep economy” in the spirit of the deep ecological principle that “the real economy is ecology.” Embodying these values, all content on this website is given freely; your donations allow us to continue giving our time and space for the development of Coming Home, education, healing, and activism.
                <br /><br />
                Coronavirus has halted nearly all income-flow to CityTree at this point, as our efforts have been focused on in-person experiences up to now. We recognize this situation as shared for many, asking only those that can to donate so that we can continue our work and keep this platform free for all.
              </p>
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
              <p>
                We wish for a world where our bodies, households, and planet are all experienced as home, the sacred vessels for vibrant ecosystems where life thrives fully. We wish for  humans to find their place again in the world with the laws of nature as their guide. 
                <br />
                We envision a human culture reconnected with the elements of life, cherishing the soil, respecting the water, celebrating the fire, and honoring the air. In these times of fear, insecurity, and mistrust, we hope for a day when a sense of stability comes not from a system of money, but rather from the abundance of love, connection, and health. Let us return to our role as guardians of life on Earth, let us come home.</p>
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
    site {
      siteMetadata {
        siteUrl
      }
    }
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
