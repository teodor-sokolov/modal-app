import React from 'react';
import PropTypes from 'prop-types';
import {CommentList} from '../CommentList';
import {EMBED_SLICE, MODAL_PATH} from '../../constants/ValidationConstants';
import './VideoBox.css';

class VideoBox extends React.Component {
  componentDidMount() {
    if (this.props.location.pathname === MODAL_PATH) {
      this.props.dispatchVideoId('');
    }
  }

  submitComment(e) {
    if (e.key === 'Enter') {
	    e.preventDefault();
      if (e.target.value === '') {
	      return;
      }
      this.props.addComment(e.target.value.trim(), this.props.videoId);
      e.target.value = '';
    }
  }

  render() {
    const passedObj = {
      videoId: this.props.videoId,
      toggleArea: this.props.toggleArea,
      isAreaVisible: this.props.isAreaVisible,
      addReply: this.props.addReply
    }
    return (this.props.videoId ?
      <div id="video-box">
        <object id="video-container" data={EMBED_SLICE + this.props.videoId}></object>
        <textarea id="comment-textarea" placeholder="Comment..."
	      onKeyDown={this.submitComment.bind(this)} />
        <CommentList comments={this.props.comments} passedProps={passedObj} />
      </div> : null
    )
  }
}

export default VideoBox;

if (process.env.NODE_ENV !== 'production') {
  VideoBox.propTypes = {
    videoId: PropTypes.string,
    addComment: PropTypes.func.isRequired,
    isAreaVisible: PropTypes.object,
    toggleArea: PropTypes.func.isRequired,
    addReply: PropTypes.func.isRequired,
    comments: PropTypes.object
  };
}
