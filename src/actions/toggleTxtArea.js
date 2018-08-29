import {TOGGLE_AREA} from '../constants/ActionTypes';

export const toggleTxtArea = (componentKey, isAreaVisible) => ({
  type: TOGGLE_AREA,
  componentKey,
  isAreaVisible
})
