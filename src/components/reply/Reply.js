import React from 'react';
import PropTypes from 'prop-types';
import {ReplyList} from '../ReplyList';
import ReplyTxtArea from '../replyarea/ReplyTxtArea';
import './Reply.css';

class Reply extends React.Component {
  componentDidMount() {
    if (this.props.lastReply) {
      this.refs.replyRef.scrollIntoView();
      this.refs.replyRef.classList.add('container-transition');
    }
    this.refs.replyRef.classList.add('container-transition');
  }

  toggleAreaListener() {
    this.props.passedProps.toggleArea(this.props.idProp, true);
  }

  render() {
    const txtAreaStyle = {
      width: '80%',
      marginLeft: '17%'
    };
    const replyIds = Object.keys(this.props.replies);
    const replyOrCommment = this.props.idArr.length <= 2 ? `comment #${this.props.idArr[0]}` : `reply #${this.props.idArr[this.props.idArr.length-2]}`;
    return (
      <div className="reply">
        <hr className="small-hr" />
        <div id="reply-div" className="container" ref='replyRef' style={this.props.colors}>
          <p className="info-reply-id">reply #{this.props.idProp} of {replyOrCommment}</p>
          <p className="text-paragraph">{this.props.txt}</p>
        </div>
        <div className="clearfix">
          <button className="reply-button" onClick={this.toggleAreaListener.bind(this)}>Reply...</button>
        </div>
        <ReplyTxtArea areaStyle={txtAreaStyle} idProp={this.props.idProp}
        idArr={this.props.idArr} passedProps={this.props.passedProps} />
        <ReplyList replies={this.props.replies} passedProps={this.props.passedProps} />
      </div>
    );
  };
}

export default Reply;

if (process.env.NODE_ENV !== 'production') {
  Reply.propTypes = {
    lastReply: PropTypes.bool.isRequired,
    txt: PropTypes.string.isRequired,
    idProp: PropTypes.number.isRequired,
    colors: PropTypes.object.isRequired,
    passedProps: PropTypes.object.isRequired,
    idArr: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])).isRequired,
    replies: PropTypes.object.isRequired
  };
}
