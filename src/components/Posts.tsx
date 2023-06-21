import { Card } from "antd"
import { FC } from "react"
import css from "../styles/Home.module.css"
import { PostsProps } from "models"
import UIAlert from "./UIAlert"
import { Link } from "react-router-dom"

const Posts: FC<PostsProps> = ({ searchPosts }) => {
  return (
    <>
      {searchPosts.length ? (
        searchPosts.map((post) => (
          <Link className={css.link} to={`/${post.id}`} key={post.id}>
            <Card title={post.title} className={css.card}>
              <p>{post.body}</p>
            </Card>
          </Link>
        ))
      ) : (
        <UIAlert />
      )}
    </>
  )
}

export default Posts
