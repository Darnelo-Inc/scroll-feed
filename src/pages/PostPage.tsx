import { FC } from "react"
import { Button, Col, Spin } from "antd"
import { useParams } from "react-router-dom"
import { useFetchPostQuery, useFetchUsersQuery } from "API/jsonApi"
import { useComment } from "hooks/useComment"
import UIAlert from "components/UIAlert"
import CommentModal from "components/CommentModal"
import FullPost from "components/FullPost"
import css from "../styles/PostPage.module.css"

const PostPage: FC = () => {
  const { id } = useParams()

  const { data: post, isLoading: postIsLoading } = useFetchPostQuery(`${id}`)

  const { data: users_data = [], isLoading: usersIsLoading } =
    useFetchUsersQuery()

  const { addComment } = useComment()

  if (postIsLoading || usersIsLoading)
    return <Spin className={css.center} size="large" />

  return (
    <>
      {post ? (
        <Col className={css.postPage}>
          <FullPost post={post} users={users_data} />
          <Button type="primary" danger onClick={() => addComment()}>
            Add comment
          </Button>
        </Col>
      ) : (
        <UIAlert
          title="Post not found"
          text="Failed to load data from the server"
        />
      )}
      <CommentModal />
    </>
  )
}

export default PostPage
