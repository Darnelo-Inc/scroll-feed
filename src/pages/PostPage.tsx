import { useFetchPostQuery } from "API/jsonApi"
import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"

const PostPage: FC = () => {
  const { id } = useParams()
  const { data: post } = useFetchPostQuery(`posts/${id}`)

  useEffect(() => {}, [])
  return (
    <div>
      {post?.id}. {post?.title}
    </div>
  )
}

export default PostPage
