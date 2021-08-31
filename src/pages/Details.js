import classes from "./Details.module.css";
import { useParams } from "react-router";
import foodData from "../components/foodData";
import Comment from "../components/Comment";
import { useState } from "react";
import NewComment from "../components/NewComment";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  const showComments = useSelector((state) => state.showComments);
  const newComments = useSelector((state) => state.showAddComments);

  // const [showComments, setShowComments] = useState(false);
  // const [newComments, setNewComments] = useState(false);
  const [allComments, setAllComments] = useState();
  const params = useParams();
  const item = foodData.find((item) => item.id === params.itemId);

  const showCommentsHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "showComm" });
    const response = await fetch(process.env.REACT_APP_ADD_COMMENTS_API, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      setAllComments(data);
    }
  };
  const closeCommentsHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "closeComm" });
  };

  const addCommentsHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "showAddComm" });
  };
// console.log(showComments);
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.imgcontainer}>
          <img className={classes.img} src={item.img} alt="" />
        </div>
        <div className={classes.itemsContainer}>
          <div className={classes.title}>{item.title}</div>
          <div className={classes.descr}>
            <div>{item.description}</div>
            <div className={classes.commentsContainer}>
              <div className={classes.buttonsContainer}>
                {showComments && (
                  <button
                    className={classes.commButton}
                    onClick={closeCommentsHandler}
                  >
                    Close
                  </button>
                )}
                {!showComments && (
                  <button
                    className={classes.commButton}
                    onClick={showCommentsHandler}
                  >
                    Show comments
                  </button>
                )}

                {showComments && (
                  <button
                    className={classes.addButton}
                    onClick={addCommentsHandler}
                  >
                    Add
                  </button>
                )}
              </div>
              {showComments && !newComments && (
                <div>
                  <Comment allComments={allComments} itemId={item.id} />
                </div>
              )}
              {!showComments && newComments && (
                <div>
                  <NewComment itemId={item.id} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
