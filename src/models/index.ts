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
  searchPosts: IPost[]
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
