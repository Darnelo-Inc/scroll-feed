import { useMemo } from "react"
import { selectPosts } from "store/selectors"
import { useAppSelector } from "./useRedux"

export const useSearchedPosts = (search: string) => {
  const posts = useAppSelector(selectPosts)

  const searchedPosts = useMemo(() => {
    return posts?.filter(
      (post) =>
        post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }, [search, posts])

  return searchedPosts
}
