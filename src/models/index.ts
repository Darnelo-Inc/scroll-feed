import type { MenuMode } from "../../node_modules/rc-menu/lib/interface.d"

export interface IPosts {
  posts: IPost[]
}

export interface IPost {
  id: number
  userId: number
  title: string
  body: string
}

export interface IMenuProps {
  mode: MenuMode | undefined
}

export interface IModal {
  postModal: boolean
  commentModal: boolean
}

export interface IUser {
  id: number
  name: string
  email: string
}

export interface PostsProps {
  searchedPosts: IPost[]
}

export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface AlertProps {
  title: string
  text?: string
}

export interface PostProps extends Omit<IPost, "userId"> {}

export interface FullPostProps {
  post: IPost
  users: IUser[]
}

export interface CommentsProps {
  comments: IComment[]
}

export interface CommentProps extends Omit<IComment, "name" | "postId"> {}

export interface IRouting {
  path: string
  element: any
}
