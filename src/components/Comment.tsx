import { FC } from "react"
import { CommentProps } from "models"
import css from "../styles/PostPage.module.css"

const Comment: FC<CommentProps> = ({ id, body, email }) => {
  return (
    <li key={id} className={css.comment}>
      <h5 className={css.comment__email}>{email}</h5>
      <p className={css.comment__body}>{body}</p>
    </li>
  )
}

export default Comment
