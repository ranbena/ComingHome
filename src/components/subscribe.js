import PropTypes from "prop-types"
import React, { useState } from "react"
import { Modal, Button, Carousel } from "react-bootstrap"

const SubscribeModal = (props) => {
  const [index, setIndex] = useState(0);

  return (
    <Modal size="lg" centered {...props} className="soon-modal">
      <Modal.Header style={{border: 'none'}}>
        <h1 className="text-center w-100">Coming Home is Coming <em>Soon</em></h1>
      </Modal.Header>
      <Modal.Body>
        <Carousel activeIndex={index} interval={0} wrap={false} controls={false} indicators={false} keyboard={false}>
          <Carousel.Item key="1">
            <p>
              Be the first to know when we launch Coming Home - a free online platform that gives you a practical toolkit to help tell a new story to the world.
            </p>
            <p className="text-center" style={{marginTop: 100}}>
              <Button variant="primary" onClick={() => setIndex(1)}>
                Click Here to Get Notified
              </Button>
            </p>
          </Carousel.Item>
          <Carousel.Item key="2">
            <iframe
              title="Subscribe"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeUb-y8CNOfEq5_z10NQPuA5FaHLMrkwnzZtbdkIb7ZoBUARQ/viewform?embedded=true"
              width="100%"
              height="380"
              frameborder="0"
              allowTransparency="false"
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  )
}

SubscribeModal.propTypes = {
  onHide: PropTypes.func,
}

SubscribeModal.defaultProps = {
  onHide: null,
}

export default SubscribeModal