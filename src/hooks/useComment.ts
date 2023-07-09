import { useActions } from "./useActions"

export const useComment = () => {
  const { toggleCommentModal } = useActions()

  const addComment = () => {
    toggleCommentModal()
  }

  return { addComment }
}
