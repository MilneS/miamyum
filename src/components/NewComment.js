import classes from "./NewComment.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const NewComment = (props) => {
  const userId = useSelector((state) => state.userId);
  
  const data = {
    comment: "",
  };
  const [enterredData, setEnterredData] = useState(data);
  const itemId = props.itemId;
  const comment = enterredData.comment;

  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch(
      process.env.REACT_APP_ADD_COMMENTS_API,
      {
        method: "POST",
        body: JSON.stringify({
          itemId: itemId,
          user: userId,
          comment: comment,
        }),
      }
    );
  };

  const enterredDataHandler = (e) => {
    setEnterredData({ ...enterredData, comment: e.target.value });
  };

  return (
    <div className={classes.comment}>
      <form onSubmit={submitHandler}>
        <label />
        <textarea
          onChange={enterredDataHandler}
          name="textarea"
          placeholder="Your comment"
          type="text"
          maxLength="145"
        />
        <button type="submit" className={classes.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewComment;
