import { IComment, IPost } from "models"

export const commentTemplate: IComment = {
  name: "",
  email: "",
  body: "",
  id: 1,
  postId: 42,
}

export const postTemplate: IPost = {
  title: "",
  body: "",
  id: 1,
  userId: 42,
}
