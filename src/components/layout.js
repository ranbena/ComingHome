/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Nav, Navbar, Container, Button } from "react-bootstrap"
import { MdLink } from "react-icons/md"
import logo from "../images/footer-logo.png"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <header>
          <Navbar expand="lg">
            <Navbar.Brand href="/">Coming Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>        
              <Nav title="Coming Soon" className="mr-auto">
                <Link to="manifesto" className="nav-link disabled">Our Manifesto</Link>
                <Link to="community" className="nav-link disabled">Community</Link>
                <Link to="about" className="nav-link disabled">About Us</Link>
              </Nav>
              <Button variant="outline-secondary" href="https://www.patreon.com/m/CityTree" target="_blank">Become a Patron</Button>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </Container>
      <div>
        <main>{children}</main>
        <footer>
          <Container>
            <div class="d-flex justify-content-between align-items-center">
              <a href="http://citytree.net/" target="_blank">
                <MdLink /> To CityTree's website (hebrew)
              </a>
              <a href="http://citytree.net/" target="_blank">
                <img src={logo} alt="עץבעיר" height="100" />
              </a>
              <div id="info">
                We're here for you<br />
                <a href="tel:+97235254196">03-5254196</a> | <a href="mailto:tree@citytree.net">tree@citytree.net</a>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
