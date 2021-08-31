import classes from "./Comment.module.css";

const Comment = (props) => {
  const allComments = props.allComments;
  const itemId = props.itemId;
  return (
    <div className={classes.commentContainer}>
      <p className={classes.comment}></p>
    </div>
  );
};
export default Comment;
