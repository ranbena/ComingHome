import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MdPlayCircleOutline, MdLockOutline } from "react-icons/md"
import { Container } from "react-bootstrap"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./video-carousel.css"

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const sortByEpisode = (e1, e2) => e1.node.frontmatter.episode > e2.node.frontmatter.episode ? 1 : -1

const VideoCarousel  = ({ edges, season, bgColor, title, placeholder }) => {
  const filtered = edges.filter(e => e.node.frontmatter.season === season)
  const sorted = filtered.sort(sortByEpisode)

  return (
    <section style={{backgroundColor: bgColor}} className="video-carousel">
      <Container>
        {title && <h2>{title} {!sorted.length && <MdLockOutline className="title-lock-icon" />}</h2>}
        {!!sorted.length ? (
          <Slider {...settings}>
            {sorted.map(({ node }) => {
              const { slug } = node.fields
              const { title, episode, date, youtube_id, duration } = node.frontmatter
              
              return (
                <div className="video-item" key={slug}>
                  {youtube_id ? (
                    <Link to={slug} style={{backgroundImage: `url(https://img.youtube.com/vi/${youtube_id}/hqdefault.jpg)`}}>
                      <MdPlayCircleOutline className="play-icon" />
                      <span className="video-text">
                        <strong>{title}</strong>
                        <small>{duration}m</small>
                      </span>
                    </Link>
                  ) : (
                    <div className="video-unpublished">
                      {date}
                      <div className="lock-icon"><MdLockOutline /></div>
                    </div>
                  )}
                  <div className="metadata">
                    {!!season && <strong>Episode {episode}</strong>}
                    {!!(season && title) && ": "}
                    {title}
                  </div>
                </div>
              )
            })}
          </Slider>
        ) : (
          <p>- {placeholder} -</p>
        )}
      </Container>
    </section>
  )
}

VideoCarousel.propTypes = {
  edges: PropTypes.array.isRequired,
  season: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  placeholder: PropTypes.string,
}

VideoCarousel.defaultProps = {
  season: null,
  title: null,
  bgColor: null,
  placeholder: null,
}

export default VideoCarousel