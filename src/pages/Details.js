import classes from "./Details.module.css";
import { useParams } from "react-router";
import foodData from "../components/foodData";
import Comment from "../components/Comment";
import { useState } from "react";
import NewComment from "../components/NewComment";
// import { useEffect } from "react";

const Details = () => {
  const [showComments, setShowComments] = useState(false);
  const [newComments, setNewComments] = useState(false);
  const [allComments, setAllComments] = useState();
  const params = useParams();
  const item = foodData.find((item) => item.id === params.itemId);

  const showCommentsHandler = async (e) => {
    e.preventDefault();
    setShowComments(!showComments);
    setNewComments(false);
    const response = await fetch(process.env.REACT_APP_ADD_COMMENTS_API, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setAllComments(data);
    }
  };

  const addCommentsHandler = (e) => {
    e.preventDefault();
    setNewComments(true);
    setShowComments(false);
  };

  // useEffect(() => {
  //   console.log(allComments);
  // }, [allComments]);

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
                <button
                  className={classes.commButton}
                  onClick={showCommentsHandler}
                >
                  {!showComments && "Show comments"} {showComments && "Hide"}
                </button>
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
