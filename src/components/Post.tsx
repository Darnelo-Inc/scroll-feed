import { FC } from "react"
import { Card } from "antd"
import { Link } from "react-router-dom"
import { PostProps } from "models"
import css from "../styles/Home.module.css"

const Post: FC<PostProps> = ({ id, title, body }) => {
  return (
    <Link className={css.link} to={`/post/${id}`} key={id}>
      <Card title={title} className={css.card}>
        <p>{body}</p>
      </Card>
    </Link>
  )
}

export default Post
