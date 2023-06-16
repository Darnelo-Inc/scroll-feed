import { FC, useEffect } from "react"
import { useAppSelector } from "../hooks/useRedux"
import { selectPosts } from "../store/selectors"
import { useFetchPostsQuery } from "../API/jsonApi"
import { useActions } from "../hooks/useActions"
import { Space, Card, Row, Alert, Spin } from "antd"

import css from "../styles/Home.module.css"
import UIModal from "components/UIModal"

const Home: FC = () => {
  const { data: posts_data, isLoading: posts_loading } = useFetchPostsQuery()

  const { setPosts } = useActions()
  const posts = useAppSelector(selectPosts)

  useEffect(() => {
    setPosts(posts_data)
  }, [setPosts, posts_data])

  if (posts_loading) return <Spin className={css.center} size="large" />

  return (
    <>
      {posts ? (
        <Row justify="center">
          <Space direction="vertical" size={16}>
            {posts.map((post) => (
              <Card title={post.title} key={post.id} className={css.card}>
                <p>{post.body}</p>
              </Card>
            ))}
          </Space>
        </Row>
      ) : (
        <Row justify="center" className={css.center}>
          <Alert
            message="Posts not found"
            description="List of posts is empty or failed to load data from the server"
            type="info"
            showIcon
          />
        </Row>
      )}
      <UIModal />
    </>
  )
}

export default Home
