import { FC, useEffect, useState } from "react"
import { Space, Row, Spin, Select, Input } from "antd"
import { useFetchPostsQuery, useFetchUsersQuery } from "../API/jsonApi"
import { useSearchedPosts } from "hooks/useSearchedPosts"
import { useActions } from "../hooks/useActions"
import PostModal from "components/PostModal"
import Posts from "components/Posts"
import UIAlert from "components/UIAlert"
import { searchHandler, selectHandler } from "utils/postInteractions"
import css from "../styles/Home.module.css"

const Home: FC = () => {
  const [sort, setSort] = useState<string>("")
  const [search, setSearch] = useState<string>("")

  const { setPosts } = useActions()

  const { data: posts_data, isLoading: posts_loading } =
    useFetchPostsQuery(sort)

  const { data: users_data = [] } = useFetchUsersQuery()

  const posts = useSearchedPosts(search)

  useEffect(() => {
    setPosts(posts_data)
  }, [setPosts, posts_data])

  if (posts_loading) return <Spin className={css.center} size="large" />

  return (
    <>
      {posts ? (
        <Row justify="center">
          <Space direction="vertical" size={16}>
            <Row justify="center">
              <Select
                defaultValue="Filter by user"
                style={{ width: 200, margin: "0 10px" }}
                options={[
                  { value: "", label: "All posts" },
                  ...users_data.map((user) => ({
                    value: "?userId=" + user.id,
                    label: user.name,
                  })),
                ]}
                onSelect={(value) => selectHandler(value, setSort)}
              />
              <Input
                placeholder="Find post"
                style={{ width: 200 }}
                value={search}
                onChange={(e) => searchHandler(e, setSearch)}
                allowClear
              />
            </Row>
            <Posts searchedPosts={posts} />
          </Space>
        </Row>
      ) : (
        <UIAlert
          title="Posts not found"
          text="List of posts is empty or failed to load data from the server"
        />
      )}
      <PostModal />
    </>
  )
}

export default Home
