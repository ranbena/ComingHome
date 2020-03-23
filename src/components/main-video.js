import React from "react"
// import { Disqus, CommentCount } from "gatsby-plugin-disqus"
// import { Tabs, Tab } from "react-bootstrap"
import { Button } from "react-bootstrap"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { MdFileDownload, MdPlayCircleOutline } from "react-icons/md";

import S01I01 from "../../content/video-posts/S01I01/video.mp4"

import "./main-video.css"

// const disqusConfig = {
//   url: "http://citytree.net",
//   identifier: "post id",
//   title: "Post title",
// }

const videos = [{
  youtube_id: '4bHQXiLrnhk',
  static_file: S01I01,
}, {
  youtube_id: '4Ok0gL9xplI',
  static_file: S01I01,
}, {
  youtube_id: '81snpPninKg',
  static_file: S01I01,
}, {
  youtube_id: 'pRQHlJNySLI',
  static_file: S01I01,
}]

const MainVideo = () => {
  const [currentVideoIdx, setCurrentVideoIdx] = React.useState(0)
  const { youtube_id, static_file } = videos[currentVideoIdx]

  return (
    <div className="main-video">
      <iframe
        className="bg2 full-video"
        title="video"
        type="text/html"
        width="100%"
        height="412"
        src={`https://www.youtube.com/embed/${youtube_id}?origin=http://citytree.com/cominghome&amp;playsinline=1&amp;color=white&amp;fs=1`}
        frameborder="0" />
      <div className="d-flex">
        <div className="videos">
          {videos.map(({ youtube_id }, idx) => (
            <div className="video-thumb" onClick={() => setCurrentVideoIdx(idx)} data-selected={idx === currentVideoIdx}>
              <img src={`https://img.youtube.com/vi/${youtube_id}/mqdefault.jpg`} />
              <MdPlayCircleOutline className="play-icon" />
            </div>
          ))}
        </div>
        <div className="actions">
          <EmailShareButton url="http://citytree.net/cominghome" className="btn btn-primary" title="Email this page">
            <EmailIcon round size={32} bgStyle={{fill: 'transparent'}} />
          </EmailShareButton> 
          <FacebookShareButton url="http://citytree.net/cominghome" className="btn btn-primary" title="Share on Facebook">
            <FacebookIcon round size={32} bgStyle={{fill: 'transparent'}} />
          </FacebookShareButton>
          <TwitterShareButton url="http://citytree.net/cominghome" className="btn btn-primary" title="Share on Twitter">
            <TwitterIcon round size={32} bgStyle={{fill: 'transparent'}} />
          </TwitterShareButton>
          <WhatsappShareButton url="http://citytree.net/cominghome" className="btn btn-primary" title="Share with Whatsapp">
            <WhatsappIcon round size={32} bgStyle={{fill: 'transparent'}} />
          </WhatsappShareButton>
          <Button href={static_file} download className="btn-download" title="Download this video">
            <MdFileDownload />
          </Button>
        </div>
      </div>
      {/* <Tabs defaultActiveKey="details">
        <Tab eventKey="details" title="Details">
          O thou, my lovely boy, who in thy power Dost hold Time's fickle glass, his fickle hour; Who hast by waning grown, and therein show'st Thy lovers withering, as thy sweet self grow'st. If Nature, sovereign mistress over wrack, As thou goest onwards, still will pluck thee back, She keeps thee to this purpose, that her skill May time disgrace and wretched minutes kill.
        </Tab>
        <Tab
          eventKey="comments"
          title={(
            <div className="comments-tab">
              Comments (<CommentCount config={disqusConfig} />)
            </div>
          )}>
          <Disqus config={disqusConfig} />
        </Tab>
      </Tabs> */}
    </div>
  )
}

export default MainVideo