import {SET_VIDEO_ID} from '../constants/ActionTypes';
import {POST_COMMENT} from '../constants/ActionTypes';
import {POST_REPLY} from '../constants/ActionTypes';
import {copyReplyFunc} from '../helpers/helpers';

export function videos(state = {current: '', currentCommentId: 1, currentReplyId: 1}, action) {
  switch (action.type) {
    case SET_VIDEO_ID:
      if (state[action.id]) {
        return Object.assign({}, state, {
          current: action.id
        });
      } else if (action.id === '') {
        return Object.assign({}, state, {
          current: action.id
        });
      } else {
        return Object.assign({}, state, {
          current: action.id, [action.id]: {comments: {}}
        });
      }
    case POST_COMMENT:
      const commentId = 'c' + state.currentCommentId++;
      return Object.assign({}, state, {
        [action.videoId]: {...state[action.videoId],
        comments: {...state[action.videoId].comments, [commentId]: {id: commentId, txt: action.commentText, replies: {}}}}
      });
    case POST_REPLY:
      action.id = state.currentReplyId++;
      action.idArr.push(action.id);
      return copyReplyFunc(state, action);
    default:
      return state;
  }
}
