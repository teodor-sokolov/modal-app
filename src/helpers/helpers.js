// a function, that copies deeply nested object, given an array of ids, which are object`s properties.
﻿export function copyReplyFunc(stateObj, actionObj) {
  let propertiesArr = [];
  propertiesArr.push(actionObj.videoId, "comments", actionObj.idArr[0], "replies");
  for (let i = 1, len = actionObj.idArr.length; i < len; i++) {
    propertiesArr.push(actionObj.idArr[i]);
    propertiesArr.push("repliesOf");
  }
  propertiesArr.pop();
  let containerArr = [];
  containerArr.push(Object.assign({}, stateObj[propertiesArr[0]]));
  for (let i = 1, len = propertiesArr.length; i < len; i++) {
    if (i === len-1) {
      containerArr[i-1] = Object.assign({}, containerArr[i-1], {
        [propertiesArr[i]]: {id: actionObj.id, txt: actionObj.replyText,
        videoId: actionObj.videoId, idArr: actionObj.idArr, repliesOf: {}}
      });
    } else {
      containerArr.push(Object.assign({}, containerArr[i-1][propertiesArr[i]]));
    }
  }
  for (let len = containerArr.length-2, i = len; i >= 0; i--) {
    containerArr[i][propertiesArr[i+1]] = containerArr[i+1];
  }
  stateObj[propertiesArr[0]] = containerArr[0];
  return stateObj;
};

export function colorBackground(colorsArr) {
  let colors = [];
  for (let i = 0, len = colorsArr.length; i < len; i++) {
    colors.push({backgroundColor: `rgb(${colorsArr[i].join(',')})`});
  }
  return colors;
}
