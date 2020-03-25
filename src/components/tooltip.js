import React from "react"
import PropTypes from "prop-types"
import { Button, OverlayTrigger, Tooltip as BSTooltip } from "react-bootstrap"

const Tooltip = ({ title, placement, children }) => (
  <OverlayTrigger
    key={title}
    placement={placement}
    overlay={
      <BSTooltip>{title}</BSTooltip>
    }
  >
    {children}
  </OverlayTrigger>
)

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  placement: PropTypes.string,
}

Tooltip.defaultProps = {
  placement: 'top',
}

export default Tooltip
