import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment/Comment';

export const CommentList = ({passedProps, comments}) => {
  const commentIds = Object.keys(comments);
  return commentIds.length > 0 && (
    <div>
      {commentIds.map((id, index, arr) => {
        const comment = comments[id];
        const isLast = index === arr.length-1 ? true : false;
        return <Comment lastComment={isLast} txt={comment.txt} idProp={comment.id} key={comment.id}
        replies={comment.replies} passedProps={passedProps} />})
      }
    </div>
  )
}

if (process.env.NODE_ENV !== 'production') {
  CommentList.propTypes = {
    passedProps: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired
  };
}
