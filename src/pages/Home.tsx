import { FC, useEffect } from "react"
import { useAppSelector } from "../hooks/useRedux"
import { selectPosts } from "../store/selectors"
import { useFetchPostsQuery } from "../API/jsonApi"
import { useActions } from "../hooks/useActions"

const Home: FC = () => {
  const { data: posts_data } = useFetchPostsQuery()

  const { setPosts } = useActions()
  const posts = useAppSelector(selectPosts)

  useEffect(() => {
    setPosts(posts_data)
  }, [setPosts, posts_data])
  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          {post.id}. {post.title}
        </div>
      ))}
    </div>
  )
}

export default Home
