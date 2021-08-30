import classes from "./AllCard.module.css";
import { useDispatch } from "react-redux";

const AllCard = (props) => {
  const link=props.link;
  const item=props.item

  const dispatch=useDispatch();
const cardHandler=(e)=>{
  dispatch({type: 'updateItem', item: item})
}
  return (
    <div className={classes.container} onClick={cardHandler}>
      <div className={classes.card}>
        <img className={classes.allimg} src={link} alt="" />
          <div className={classes.after} />
      </div>
    </div>
  );
};

export default AllCard;
