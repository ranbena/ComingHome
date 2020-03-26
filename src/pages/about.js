import React from "react"
import { Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import seo from "../components/seo"
import "./static-page.css"

const NotFoundPage = () => (
  <Layout>
    <seo title="Our Manifesto" />
    <Container className="static-page">
      <h1>About Us</h1>
      <small className="underline">CityTree is a nurturing space for the renewed story of interconnectedness for our society.</small>
      <p>
        Since 2006, CityTree - an ecological oasis in a fast-paced, concrete-covered city - has been speaking climate truth: our civilization and planet are in a state of breakdown on multiple levels - from the eroding soil, to the global growth economy which is speeding off the rails.
        <br /><br />
        We see the urgency raised by climate crisis as a unique opportunity to not simply innovate to sustain our existing systems, but rather to restore the conditions for life to thrive on planet Earth. We see it as a call to reunite with the land that holds us and create from a place that recognizes the sacred interconnectedness of our ecosystems.
        <br /><br />
        <strong>Built upon this deep necessity to develop relationships with our natural surroundings, CityTree holds a peaceful space for experimentation and learning in the heart of Tel Aviv and offers a genuine model of zero-waste, positive impact living in an urban setting.</strong>
        <br /><br />
      </p>
      <div className="textbox">
        <h2>Uniting Humanity and Nature</h2>
        <p>
          <br />
          Our approach at CityTree mirrors the vision we hold for the world: to reimagine humans as fully harmonious participants in a regenerative, life-giving system. Beyond hosting ecological retreats and sustainability workshops, we design nature-based solutions in the city that merge ancient practices with modern techniques. 
          <br /><br />
          Addressing all levels, from the individual to the political, CityTree works to unite the local cityscape and human society with nature to restore a whole system and build resilience in the face of a changing climate. Our work over the years has supported people who work on experimental projects that explore food security, circular economy, sustainable energy, waste management solutions, nature rights, and community building.
          <br /><br />
        </p>
        <div>
          <small>Connect with our mission?</small>
          <Button className="btn-patron" variant="outline-primary" href="https://www.patreon.com/m/CityTree" target="_blank">Become a Patron</Button>
        </div>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
