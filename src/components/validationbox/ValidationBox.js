import React from 'react';
import PropTypes from 'prop-types';
import './ValidationBox.css';

export const ValidationBox = props => (props.warning.length !== 0 && props.valueLen ?
  <div style={{backgroundColor: '#e9dbd5', position: 'relative'}}>
    <button id="hide" onClick={() => {props.closeSelf('')}}>X</button>
    <p className='validation-box'>{props.warning}</p>
  </div> : null
)

if (process.env.NODE_ENV !== 'production') {
  ValidationBox.propTypes = {
    closeSelf: PropTypes.func.isRequired,
    warning: PropTypes.string.isRequired,
    valueLen: PropTypes.number
  };
}
