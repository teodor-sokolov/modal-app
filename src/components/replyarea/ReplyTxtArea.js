import React from 'react';
import PropTypes from 'prop-types';
import './ReplyTxtArea.css';

class ReplyTxtArea extends React.Component {
  componentDidUpdate() {
    if (this.refs.txtAreaRef) {
      this.refs.txtAreaRef.focus();
      this.refs.txtAreaRef.scrollIntoView();
    }
  }

  submitReply(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.target.value === '') {
        return;
      }
      const idsArray = this.props.idArr ? this.props.idArr : [this.props.commentId];
      this.props.passedProps.addReply(e.target.value.trim(), this.props.passedProps.videoId, idsArray);
      e.target.value = '';
      this.props.passedProps.toggleArea(this.props.idProp, false);
    }
  }

  render() {
    const {isAreaVisible, componentKey} = this.props.passedProps.isAreaVisible;
    return (isAreaVisible && componentKey === this.props.idProp ?
      <div>
        <textarea ref='txtAreaRef' style={this.props.areaStyle} className="reply-textarea" rows="1" placeholder="Reply..."
        onKeyDown={this.submitReply.bind(this)} />
      </div> :null
    )
  };
}

export default ReplyTxtArea;

if (process.env.NODE_ENV !== 'production') {
  ReplyTxtArea.propTypes = {
    commentId: PropTypes.string,
    idProp: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    areaStyle: PropTypes.object,
    passedProps: PropTypes.object.isRequired,
    idArr: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]))
  };
}
