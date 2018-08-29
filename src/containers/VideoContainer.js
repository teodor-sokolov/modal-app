import {connect} from 'react-redux';
import VideoBox from '../components/videobox/VideoBox';
import {postComment} from '../actions/postComment';
import {toggleTxtArea} from '../actions/toggleTxtArea';
import {postReply} from '../actions/postReply';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => (
  state.videos.current.length > 0 ? {
    videoId: state.videos.current,
    isAreaVisible: state.areaVisible,
    comments: state.videos[state.videos.current].comments
  } : {}
)

const mapDispatchToProps = dispatch => ({
  addComment: (commentText, videoId) => {return dispatch(postComment(commentText, videoId))},
  toggleArea: (componentKey, isAreaVisible) => {return dispatch(toggleTxtArea(componentKey, isAreaVisible))},
  addReply: (replyText, videoId, idsArray) => {return dispatch(postReply(replyText, videoId, idsArray))}
});

const VideoContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoBox));

export default VideoContainer;
