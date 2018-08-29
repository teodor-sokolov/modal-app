import React from 'react';
import PropTypes from 'prop-types';
import ReplyTxtArea from '../replyarea/ReplyTxtArea';
import {ReplyList} from '../ReplyList';
import './Comment.css';

class Comment extends React.Component {
  componentDidMount() {
    if (this.props.lastComment) {
      this.refs.commentRef.scrollIntoView();
      setTimeout(() => {
        if (this.refs.commentRef) {
          this.refs.commentRef.classList.add('container-transition');
        }
      }, 0);
    }
    this.refs.commentRef.classList.add('container-transition');
  }

  toggleAreaListener() {
    this.props.passedProps.toggleArea(this.props.idProp, true);
  }

  render() {
    return (
      <div className="comment">
        <hr className="comment-hr" />
        <div className="container" ref='commentRef'>
          <p className="id-info">comment #{this.props.idProp} of video with id {this.props.passedProps.videoId}</p>
          <p className="text-paragraph">{this.props.txt}</p>
        </div>
        <div className="clearfix">
          <button className="reply-button" onClick={this.toggleAreaListener.bind(this)}>Reply...</button>
        </div>
        <ReplyTxtArea idProp={this.props.idProp} commentId={this.props.idProp} passedProps={this.props.passedProps} />
        <ReplyList replies={this.props.replies} passedProps={this.props.passedProps} />
      </div>
    );
  }
}

export default Comment;

if (process.env.NODE_ENV !== 'production') {
  Comment.propTypes = {
    lastComment: PropTypes.bool.isRequired,
    txt: PropTypes.string.isRequired,
    idProp: PropTypes.string.isRequired,
    passedProps: PropTypes.object.isRequired,
    replies: PropTypes.object.isRequired
  };
}
