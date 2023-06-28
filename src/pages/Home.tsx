import { ChangeEvent, FC, useEffect, useMemo, useState } from "react"
import { useAppSelector } from "../hooks/useRedux"
import { selectPosts } from "../store/selectors"
import { useFetchPostsQuery, useFetchUsersQuery } from "../API/jsonApi"
import { useActions } from "../hooks/useActions"
import { Space, Row, Spin, Select, Input } from "antd"

import css from "../styles/Home.module.css"
import UIModal from "components/UIModal"
import Posts from "components/Posts"
import UIAlert from "components/UIAlert"

const Home: FC = () => {
  const [sort, setSort] = useState<string>("")
  const [search, setSearch] = useState<string>("")

  const posts = useAppSelector(selectPosts)
  const { setPosts } = useActions()

  const { data: posts_data, isLoading: posts_loading } =
    useFetchPostsQuery(sort)

  const { data: users_data = [] } = useFetchUsersQuery()

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const selectHandler = (value: string) => {
    setSort(value)
  }

  const searchPosts = useMemo(() => {
    return posts?.filter(
      (post) =>
        post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }, [search, posts])

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
                onSelect={(value) => selectHandler(value)}
              />
              <Input
                placeholder="Find post"
                style={{ width: 200 }}
                value={search}
                onChange={searchHandler}
                allowClear
              />
            </Row>
            <Posts searchPosts={searchPosts} />
          </Space>
        </Row>
      ) : (
        <UIAlert />
      )}
      <UIModal />
    </>
  )
}

export default Home
