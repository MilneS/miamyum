import classes from "./NewComment.module.css";

const NewComment = () => {
  const commentFunc = async () => {
      const response= fetch(process.env.REACT_APP_ADD_COMMENTS_API)
  };

  return (
    <div className={classes.comment}>
      <form>
        <label />
        <textarea placeholder="Your comment" type="text" maxLength="145" />
        <button className={classes.formButton}>Submit</button>
      </form>
    </div>
  );
};
export default NewComment;
