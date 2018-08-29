import React from 'react';
import PropTypes from 'prop-types';
import Reply from './reply/Reply';
import {rgbArr} from '../constants/StyleConstants';
import {colorBackground} from '../helpers/helpers';

export const ReplyList = (props) => {
  const colorArr = colorBackground(rgbArr);
  const {replies} = props;
  const repliesIds = Object.keys(replies);
  return repliesIds.length > 0 && (
    <div>
      {repliesIds.map((id, index, arr) => {
        const replyEntry = replies[id];
        const level = replyEntry.idArr.length - 2;
        const colorCol = colorArr[level % colorArr.length];
        const isLast = index === arr.length-1 ? true : false;
        return (
	        <Reply lastReply={isLast} txt={replyEntry.txt} key={replyEntry.id.toString()}
          replies={replyEntry.repliesOf} idProp={replyEntry.id} idArr={replyEntry.idArr}
          passedProps={props.passedProps} colors={colorCol} />)
        })
      }
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ReplyList.propTypes = {
    passedProps: PropTypes.object.isRequired,
    replies: PropTypes.object.isRequired
  };
}
