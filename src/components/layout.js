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
import Tooltip from "../components/tooltip"
import logo from "../images/footer-logo.png"
import "./layout.css"


const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <header>
          <Navbar expand="lg">
            <Link className="navbar-brand" to="/">Coming Home</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>        
              <Nav className="mr-auto">
                <Tooltip title="Coming soon">
                  <span>
                    <Link to="manifesto" className="nav-link disabled">Home Manifesto</Link>
                  </span>
                </Tooltip>
                <Tooltip title="Coming soon">
                  <span>
                    <Link to="community" className="nav-link disabled">Community</Link>
                  </span>
                </Tooltip>
                <Link to="about" className="nav-link">About Us</Link>
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
            <div className="d-flex justify-content-between align-items-center">
              <a href="http://citytree.net/" target="_blank" rel="noopener noreferrer">
                <MdLink /> To CityTree's Website (עברית)
              </a>
              <a href="http://citytree.net/" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="CityTree" height="100" />
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
