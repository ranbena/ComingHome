/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Nav, Navbar, Container, Button } from "react-bootstrap"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <header>
        <Navbar expand="lg">
          <Navbar.Brand href="/">Coming Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>        
            <Nav className="mr-auto">
              <Link to="manifesto">Our Manifesto</Link>
              <Link to="community">Community</Link>
              <Link to="about">About Us</Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-secondary" href="https://www.patreon.com/m/CityTree">Become a Patron</Button>
        </Navbar>
      </header>
      <div>
        <main>{children}</main>
        <footer>
          Footer content
        </footer>
      </div>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
