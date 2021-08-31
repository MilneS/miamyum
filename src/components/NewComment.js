import classes from './NewComment.module.css'

const NewComment=()=>{
    return(
        <div className={classes.comment}>
            <form>
                <label/>
                <textarea placeholder='Your comment' type='text' maxLength='145'/>
                <button className={classes.formButton}>Submit</button>
            </form>
        </div>
    )
}
export default NewComment

