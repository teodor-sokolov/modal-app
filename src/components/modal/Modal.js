import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import {URL_WARNING, SLICE_COUNT, VIDEO_REG_EXP, VIDEO_ID_REG_EXP, URL_ID_WARNING, MODAL_PATH} from '../../constants/ValidationConstants';
import {ValidationBox} from '../validationbox/ValidationBox';
import VideoContainer from '../../containers/VideoContainer';
import './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.renderValidationBox = this.renderValidationBox.bind(this);
  }

  componentDidMount() {
    this.props.dispatchVideoId('');
    this.refs.inputRef.focus();
    if (this.props.location.pathname !== this.props.match.path) {
      const urlVideoId = this.props.location.pathname.slice(SLICE_COUNT); // extract video id from url
      if (!VIDEO_ID_REG_EXP.test(urlVideoId)) {
        this.props.dispatchVideoId('');
        this.props.history.replace('/' + urlVideoId); // change the router history in order to function properly
        return this.props.history.push('/404');
      }
      this.props.dispatchVideoId(urlVideoId);
      this.refs.contentRef.classList.remove("modal-hidden");
    } else {
      setTimeout(() => {
        this.refs.contentRef.classList.remove("modal-hidden");
        this.refs.contentRef.classList.add("modal-scale");
      }, 0);
    }
  }

  componentDidUpdate() {
    const urlVideoId = this.props.location.pathname.slice(SLICE_COUNT); //extract video id from url
    this.props.dispatchVideoId(urlVideoId);
  }

  onContentClick(e) {
    e.stopPropagation();
  }

  closeModal() {
    this.props.dispatchVideoId('');
    this.refs.overlayRef.classList.add("modal-hidden");
    setTimeout(() => {
      this.props.history.push('/');
    }, 200);
  }

  renderValidationBox(message, valueLength) {
    ReactDOM.render(
      <ValidationBox closeSelf={this.renderValidationBox} warning={message} valueLen={valueLength} />,
      this.refs.validationDiv
    );
  }

  onInputChange() {
    let inputStr = this.refs.inputRef.value.trim();
    let matchRegExp = inputStr.match(VIDEO_REG_EXP);
    if (matchRegExp === null) {
      return this.renderValidationBox(URL_WARNING, inputStr.length);
    }
    if (!matchRegExp[1]) {
      return this.renderValidationBox(URL_ID_WARNING, inputStr.length);
    }
    this.refs.inputRef.value = '';
    this.renderValidationBox('');
    this.props.history.push(MODAL_PATH + matchRegExp[1]);
  }

  render() {
    return (
      <div>
        <div ref='overlayRef' className="modal-overlay" onClick={this.closeModal.bind(this)} >
          <div ref='contentRef' className="modal-content modal-hidden" onClick={this.onContentClick} >
            <button id="close-button" onClick={this.closeModal.bind(this)}>X</button>
            <input id="inputField" type="text" ref='inputRef' placeholder="YouTube URL:"
            onChange={debounce(this.onInputChange, 600).bind(this)} />
            <div ref="validationDiv"></div>
            <VideoContainer dispatchVideoId={this.props.dispatchVideoId} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

if (process.env.NODE_ENV !== 'production') {
  Modal.propTypes = {
    dispatchVideoId: PropTypes.func.isRequired
  };
}
