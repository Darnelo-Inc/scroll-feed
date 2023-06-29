import { FC } from "react"
import {
  useFetchCommentsQuery,
  useFetchPostQuery,
  useFetchUsersQuery,
} from "API/jsonApi"
import { Button, Col, Spin } from "antd"
import { useParams } from "react-router-dom"
import css from "../styles/PostPage.module.css"
import UIAlert from "components/UIAlert"
import { useActions } from "hooks/useActions"
import CommentModal from "components/CommentModal"

const PostPage: FC = () => {
  const { toggleCommentModal } = useActions()

  const { id } = useParams()
  const { data: post, isLoading: postIsLoading } = useFetchPostQuery(`${id}`)
  const { data: comments, isLoading: commentsIsLoading } =
    useFetchCommentsQuery(id)
  const { data: users_data = [], isLoading: usersIsLoading } =
    useFetchUsersQuery()

  const addComment = () => {
    toggleCommentModal()
  }

  if (postIsLoading || usersIsLoading)
    return <Spin className={css.center} size="large" />

  return (
    <>
      {post ? (
        <Col className={css.postPage}>
          {post && (
            <section>
              <h3 className={css.title}>{post.title}</h3>

              <hr />

              <i className={css.author}>
                {users_data[post.userId - 1].name}
                <a
                  className={css.email}
                  href={`mailto:${users_data[post.userId - 1].email}`}
                >
                  Email: {users_data[post.userId - 1].email}
                </a>
              </i>
              <p className={css.body}>{post.body}</p>

              <hr />
              {commentsIsLoading ? (
                <Spin className={css.center} size="large" />
              ) : (
                <>
                  <h3 className={css.comments}>Comments:</h3>
                  <ul className={css.commentsList}>
                    {comments?.map((comment) => (
                      <li key={comment.id} className={css.comment}>
                        <h5 className={css.comment__email}>{comment.email}</h5>
                        <p className={css.comment__body}>{comment.body}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          )}
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
