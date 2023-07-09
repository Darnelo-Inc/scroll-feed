import { FC } from "react"
import { CommentsProps } from "models"
import Comment from "./Comment"
import css from "../styles/PostPage.module.css"

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <>
      <h3 className={css.comments}>Comments:</h3>
      <ul className={css.commentsList}>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </ul>
    </>
  )
}

export default Comments
