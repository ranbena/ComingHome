import React from "react"
// import { Disqus, CommentCount } from "gatsby-plugin-disqus"
// import { Tabs, Tab } from "react-bootstrap"
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"
import { MdPlayCircleOutline } from "react-icons/md";
import ShareActions from "./share-actions"
import intro1 from "../../content/video-posts/S01Intros/S01-intro1.mp4"
import intro2 from "../../content/video-posts/S01Intros/S01-intro2.mp4"
import intro3 from "../../content/video-posts/S01Intros/S01-intro3.mp4"
import intro4 from "../../content/video-posts/S01Intros/S01-intro4.mp4"
import "./main-video.css"

// const disqusConfig = {
//   url: "http://citytree.net",
//   identifier: "post id",
//   title: "Post title",
// }

const videos = [{
  youtube_id: '4bHQXiLrnhk',
  static_file: intro1,
}, {
  youtube_id: '1EeryjflCrk',
  static_file: intro2,
}, {
  youtube_id: 'kAkueYwyg6Y',
  static_file: intro3,
}, {
  youtube_id: 'yIX9gT5mYGo',
  static_file: intro4,
}]

const MainVideo = ({ siteUrl }) => {
  const [currentVideoIdx, setCurrentVideoIdx] = React.useState(0)
  const { youtube_id, static_file } = videos[currentVideoIdx]

  return (
    <div className="main-video">
      <iframe
        className="bg2 full-video"
        allowFullScreen="allowFullScreen"
        title="video"
        type="text/html"
        width="100%"
        height="412"
        src={`https://www.youtube.com/embed/${youtube_id}?origin=http://citytree.com/cominghome&amp;playsinline=1&amp;color=white&amp;fs=1`}
        frameBorder="0" />
      <div className="d-flex">
        <div className="videos">
          {videos.map(({ youtube_id }, idx) => (
            <Button key={`video-${idx}`} variant="link"className="video-thumb" onClick={() => setCurrentVideoIdx(idx)} data-selected={idx === currentVideoIdx}>
              <img src={`https://img.youtube.com/vi/${youtube_id}/mqdefault.jpg`} alt={`Introduction video ${idx}`} />
              <MdPlayCircleOutline className="play-icon" />
            </Button>
          ))}
        </div>
        <ShareActions url={siteUrl} staticFile={static_file} />
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

MainVideo.propTypes = {
  siteUrl: PropTypes.string.isRequired,
}

export default MainVideo