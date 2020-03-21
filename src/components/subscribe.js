import PropTypes from "prop-types"
import React from "react"
import { Modal } from "react-bootstrap"

const SubscribeModal = (props) => (
  <Modal size="lg" centered {...props}>
    <Modal.Header closeButton>
      <Modal.Title>
        <h4>Get Video Release Notifications</h4>
        <small>Receive updates via email to get the latest on Coming Home.</small>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <iframe title="Subscribe" src="https://docs.google.com/forms/d/e/1FAIpQLSeUb-y8CNOfEq5_z10NQPuA5FaHLMrkwnzZtbdkIb7ZoBUARQ/viewform?embedded=true" width="100%" height="685" frameborder="0" marginheight="0" marginwidth="0" allowTransparency="false">Loading…</iframe>
    </Modal.Body>
  </Modal>
)

SubscribeModal.propTypes = {
  onHide: PropTypes.func.isRequired,
}

export default SubscribeModal