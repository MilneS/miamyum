import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Comment.module.css";

const Comment = (props) => {
  // This selects all the comments from the state
  const allComments = useSelector((state) => state.allComments);
  const [filteredComments, setFilteredComments] = useState();
  const itemId = props.itemId

  useEffect(() => {
    /**
     * Every time allComments updates, this checks if the object is empty
     * If it isn't empty it calls the filter comments function
     */
    if (allComments && !!Object.keys(allComments).length) {
      filterComments()
    }
  }, [allComments])

  /**
   * This function filters all the comments from the global state 
   *  then updates the local state with  an array of the filtered comments
   */
  const filterComments = () => {
    let comments = []
    for (const key in allComments) {
      let comment = allComments[key]
      if (comment.itemId === itemId) {
        comments.push(comment)
      }
    }
    setFilteredComments(comments)
  }

  const displayComm = () => {
    return filteredComments.map((item, index) => {
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
      {filteredComments && filteredComments.length > 0 ? (
        displayComm()
      ) : (
        <div className={classes.noComment}>No comments.</div>
      )}
    </div>
  );
};
export default Comment;
