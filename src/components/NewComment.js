import classes from "./NewComment.module.css";
import { useState } from "react";

const NewComment = () => {

    const [enterredData, setEnterredData] = useState();

    const commentFunc = async () => {
      const response= fetch(process.env.REACT_APP_ADD_COMMENTS_API)
  };
const submitHandler=(e)=>{
    e.preventDefault()
    // 
}
const enterredDataHandler=(e)=>{
    setEnterredData(e.target.value)
}
  return (
    <div className={classes.comment}>
      <form onSubmit={submitHandler}>
        <label />
        <textarea onChange={enterredDataHandler} name='textarea' placeholder="Your comment" type="text" maxLength="145" />
        <button type='submit' className={classes.formButton}>Submit</button>
      </form>
    </div>
  );
};
export default NewComment;
