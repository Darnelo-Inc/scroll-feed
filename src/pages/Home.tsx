import { FC, useEffect, useState } from "react"
import { useAppSelector } from "../hooks/useRedux"
import { selectPosts } from "../store/selectors"
import { useFetchPostsQuery, useFetchUsersQuery } from "../API/jsonApi"
import { useActions } from "../hooks/useActions"
import { Space, Card, Row, Alert, Spin, Select } from "antd"

import css from "../styles/Home.module.css"
import UIModal from "components/UIModal"

const Home: FC = () => {
  const [sort, setSort] = useState<string>("")
  const { data: posts_data, isLoading: posts_loading } =
    useFetchPostsQuery(sort)
  const { data: users_data = [] } = useFetchUsersQuery()

  const { setPosts } = useActions()
  const posts = useAppSelector(selectPosts)

  const selectHandler = (value: string) => {
    setSort(value)
  }

  useEffect(() => {
    setPosts(posts_data)
  }, [setPosts, posts_data])

  if (posts_loading) return <Spin className={css.center} size="large" />

  return (
    <>
      {posts ? (
        <Row>
          <Space direction="vertical" size={16}>
            <Select
              defaultValue="Filter by user"
              style={{ width: 200 }}
              options={[
                { value: "", label: "All posts" },
                ...users_data.map((user) => ({
                  value: "?userId=" + user.id,
                  label: user.name,
                })),
              ]}
              onSelect={(value) => selectHandler(value)}
            />
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
