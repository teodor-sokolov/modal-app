import {TOGGLE_AREA} from '../constants/ActionTypes';

export function areaVisible(state = {isAreaVisible: false, componentKey: ''}, action) {
  switch (action.type) {
    case TOGGLE_AREA:
      return Object.assign({}, state, {
        isAreaVisible: action.isAreaVisible,
        componentKey: action.componentKey
      });
    default:
      return state;
  }
}
