import { FC } from "react"
import { useAppSelector } from "../hooks/useRedux"
import { selectPosts } from "../store/selectors"

const Home: FC = () => {
  const posts = useAppSelector(selectPosts)
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id}. {post.title}
        </div>
      ))}
    </div>
  )
}

export default Home
