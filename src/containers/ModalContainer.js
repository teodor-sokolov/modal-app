import {connect} from 'react-redux';
import {setVideoId} from '../actions/setVideoId';
import PropTypes from 'prop-types';
import Modal from '../components/modal/Modal';

const mapDispatchToProps = dispatch => ({
  dispatchVideoId: (videoUrl) => {
    return dispatch(setVideoId(videoUrl))
  }
});

const ModalContainer = connect(null, mapDispatchToProps)(Modal);

export default ModalContainer;
