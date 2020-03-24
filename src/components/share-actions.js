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
import "./share-actions.css"

const ShareActions = ({ url, staticFile }) => (
  <div className="actions">
    <EmailShareButton url={url} className="btn btn-primary" title="Email this page">
      <EmailIcon round size={32} bgStyle={{fill: 'transparent'}} />
    </EmailShareButton> 
    <FacebookShareButton url={url} className="btn btn-primary" title="Share on Facebook">
      <FacebookIcon round size={32} bgStyle={{fill: 'transparent'}} />
    </FacebookShareButton>
    <WhatsappShareButton url={url} className="btn btn-primary" title="Share with Whatsapp">
      <WhatsappIcon round size={32} bgStyle={{fill: 'transparent'}} />
    </WhatsappShareButton>
    {!!staticFile && (
      <Button href={staticFile} download className="btn-download" title="Download this video">
        <MdFileDownload />
      </Button>
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
