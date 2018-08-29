import {POST_COMMENT} from '../constants/ActionTypes';

export const postComment = (commentText, videoId) => ({
  type: POST_COMMENT,
  commentText,
  videoId
})
