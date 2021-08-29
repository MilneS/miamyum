import classes from './AllCard.module.css'
import foodData from './foodData';


const AllCard=(props)=>{
  const{title, link, description}=props
    return(
        <div className={classes.container}>
        <div className={classes.card}>
          <img className={classes.allimg} src={link} alt=''/>
          <div className={classes.after}></div>
        </div>
      </div>
    )
}

export default AllCard;