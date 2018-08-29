import {combineReducers} from 'redux';
import {videos} from './videos';
import {areaVisible} from './areaVisible';

export default combineReducers({
  videos,
  areaVisible
});
