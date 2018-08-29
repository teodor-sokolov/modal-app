import {POST_REPLY} from '../constants/ActionTypes';

export const postReply = (replyText, videoId, idsArray) => ({
  type: POST_REPLY,
  replyText,
  videoId,
  idArr: idsArray.slice()
})
