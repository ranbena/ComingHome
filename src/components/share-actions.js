import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { MdFileDownload } from "react-icons/md";
import Tooltip from "./tooltip"
import "./share-actions.css"


const ShareActions = ({ url, staticFile }) => (
  <div className="actions">
    <Tooltip title="Email this page">
      <EmailShareButton url={url} className="btn btn-primary">
        <EmailIcon round size={32} bgStyle={{fill: 'transparent'}} />
      </EmailShareButton> 
    </Tooltip>
    <Tooltip title="Share on Facebook">
      <FacebookShareButton url={url} className="btn btn-primary">
        <FacebookIcon round size={32} bgStyle={{fill: 'transparent'}} />
      </FacebookShareButton>
    </Tooltip>
    <Tooltip title="Share with Whatsapp">
      <WhatsappShareButton url={url} className="btn btn-primary">
        <WhatsappIcon round size={32} bgStyle={{fill: 'transparent'}} />
      </WhatsappShareButton>
    </Tooltip>
    {!!staticFile && (
      <Tooltip title="Download this video">
        <Button href={staticFile} download className="btn-download">
          <MdFileDownload />
        </Button>
      </Tooltip>
    )}
  </div>
)

ShareActions.propTypes = {
  url: PropTypes.string.isRequired,
  staticFile: PropTypes.string,
}

ShareActions.defaultProps = {
  staticFile: null,
}

export default ShareActions
