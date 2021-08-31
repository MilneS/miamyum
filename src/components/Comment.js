import classes from "./Comment.module.css";
import { useState } from "react";

const Comment = (props) => {
  const allComments = props.allComments;
  const itemId = props.itemId;
  const newArr = [];
  const commArr = [];

  for (const items in allComments) {
    newArr.push(allComments[items]);
  }
  const filteredData = newArr.filter((item) => item.itemId === itemId);
  for (let i = 0; i < filteredData.length; i++) {
    let currData = filteredData[i];
    commArr.push(currData);
  }

  return (
    <div className={classes.commentContainer}>
      {commArr.map((item, index) => {
        return (
          <div key={index} className={classes.commItem}>
            <div className={classes.user}>{item.userName}</div>
            <p className={classes.comment}>{item.comment}</p>
          </div>
        );
      })}
      {commArr.length < 1 && <div>No comments.</div>}
    </div>
  );
};
export default Comment;
