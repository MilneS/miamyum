import classes from "./Comment.module.css";

const Comment = (props) => {
  const allComments = props.allComments;
  const itemId = props.itemId;
const newArr=[]


 for (const items in allComments){
     newArr.push(allComments[items])
   }
   const filteredData= newArr.filter(item=>item.itemId === itemId)
console.log(filteredData);



  return (
    <div className={classes.commentContainer}>
      <p className={classes.comment}></p>
    </div>
  );
};
export default Comment;
