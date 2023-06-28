import {
  useFetchCommentsQuery,
  useFetchPostQuery,
  usePostCommentMutation,
} from "API/jsonApi"
import { Button, Row } from "antd"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PostPage: FC = () => {
  const [comment, setComment] = useState<string>("")
  console.log(comment)

  const { id } = useParams()
  const { data: post } = useFetchPostQuery(`posts/${id}`)
  const { data: comments } = useFetchCommentsQuery(id)
  const [postComent, { isSuccess }] = usePostCommentMutation()

  const clickHandler = () => {
    postComent(comment)
  }
  useEffect(() => {}, [])
  return (
    <Row style={{ width: 900 }} justify="center">
      <Row justify="center">
        {post?.id}. {post?.title}
        {post?.body}
        <div>
          {comments?.map((comment) => (
            <div key={comment.id} style={{ marginTop: "20px" }}>
              <div>{comment.name}</div>
              {comment.email}
            </div>
          ))}
        </div>
      </Row>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ marginTop: 20 }}
      />
      <Button type="primary" onClick={() => clickHandler()}>
        Post comment
      </Button>
    </Row>
  )
}

export default PostPage
