import React from "react"
import PropTypes from "prop-types"
import { Modal } from "react-bootstrap"

const SubscribeModal = (props) => (
  <Modal size="lg" centered {...props}>
    <Modal.Header closeButton>
      <h1>Get Video Release Notifications</h1>
    </Modal.Header>
    <Modal.Body>
      <p>
        Receive updates via email to get the latest on Coming Home.
      </p>
      <iframe
        title="Subscribe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeUb-y8CNOfEq5_z10NQPuA5FaHLMrkwnzZtbdkIb7ZoBUARQ/viewform?embedded=true"
        width="100%"
        height="380"
        frameBorder="0"
        allowTransparency="false"
      />
    </Modal.Body>
  </Modal>
)

SubscribeModal.propTypes = {
  onHide: PropTypes.func,
}

SubscribeModal.defaultProps = {
  onHide: null,
}

export default SubscribeModal