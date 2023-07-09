import { FC } from "react"
import { Spin } from "antd"
import { useParams } from "react-router-dom"
import { useFetchCommentsQuery } from "API/jsonApi"
import { FullPostProps } from "models"
import Comments from "./Comments"
import css from "../styles/PostPage.module.css"

const FullPost: FC<FullPostProps> = ({ post, users }) => {
  const { id } = useParams()

  const { data: comments = [], isLoading: commentsIsLoading } =
    useFetchCommentsQuery(id)
  return (
    <section>
      <h1 className={css.title}>{post.title}</h1>
      <hr />
      <i className={css.author}>
        {users[post.userId - 1].name}
        <a
          className={css.email}
          href={`mailto:${users[post.userId - 1].email}`}
        >
          Email: {users[post.userId - 1].email}
        </a>
      </i>
      <p className={css.body}>{post.body}</p>

      <hr />
      {commentsIsLoading ? (
        <Spin className={css.center} size="large" />
      ) : (
        <Comments comments={comments} />
      )}
    </section>
  )
}

export default FullPost
