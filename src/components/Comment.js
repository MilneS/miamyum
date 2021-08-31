import { useEffect } from "react";
import classes from "./Comment.module.css";

const Comment = (props) => {
  const allComments = props.allComments;
  const itemId = props.itemId;
  const newArr = [];
  const commArr = [];

  useEffect(()=>{

        for (const items in allComments) {
      newArr.push(allComments[items]);
    }
    const filteredData = newArr.filter((item) => item.itemId === itemId);
    for (let i = 0; i < filteredData.length; i++) {
      let currData = filteredData[i];
      commArr.push(currData);
    }    console.log(allComments);
  },[allComments])

  

  const displayComm = () => {
    return commArr.map((item, index) => {
      return (
        <div key={index} className={classes.commItem}>
          <div className={classes.user}>{item.userName}</div>
          <p className={classes.comment}>{item.comment}</p>
        </div>
      );
    });
  };

  return (
    <div className={classes.commentContainer}>
      {commArr.length > 0 ? (
        displayComm()
      ) : (
        <div className={classes.noComment}>No comments.</div>
      )}
    </div>
  );
};
export default Comment;
