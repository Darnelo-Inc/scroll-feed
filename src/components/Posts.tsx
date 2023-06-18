import { Card } from "antd"
import { FC } from "react"
import css from "../styles/Home.module.css"
import { PostsProps } from "models"
import UIAlert from "./UIAlert"

const Posts: FC<PostsProps> = ({ searchPosts }) => {
  return (
    <>
      {searchPosts.length ? (
        searchPosts.map((post) => (
          <Card title={post.title} key={post.id} className={css.card}>
            <p>{post.body}</p>
          </Card>
        ))
      ) : (
        <UIAlert />
      )}
    </>
  )
}

export default Posts
