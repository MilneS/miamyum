import classes from "./NewComment.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import getAllComments from "../utilities/getAllCommentAPI";

const NewComment = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);

  const data = {
    comment: "",
  };
  const [enterredData, setEnterredData] = useState(data);
  const [showErr, setShowErr] = useState(false);
  const itemId = props.itemId;
  const comment = enterredData.comment;
  const userName = localStorage.getItem("userName");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (comment.length > 0 && comment.length < 145) {
      setShowErr(false);
      await fetch(process.env.REACT_APP_ADD_COMMENTS_API, {
        method: "POST",
        body: JSON.stringify({
          itemId: itemId,
          userName: userName,
          userId: userId,
          comment: comment,
        }),
      });
      getAllComments().then((data) => {
        dispatch({ type: "setComments", payload: data });
      });
      dispatch({ type: "showComm" });
    } else {
      setShowErr(true);
    }
  };

  const enterredDataHandler = (e) => {
    setEnterredData({ ...enterredData, comment: e.target.value });
  };

  return (
    <div className={classes.comment}>
      <form onSubmit={submitHandler}>
      {showErr && <div className={classes.errMsg}>Your comment is too long</div>}
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
