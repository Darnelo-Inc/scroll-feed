import type { MenuMode } from "../../node_modules/rc-menu/lib/interface.d"

export interface IPosts {
  posts: IPost[]
}

export interface IPost {
  id: number
  title: string
  body: string
}

export interface IMenuProps {
  mode: MenuMode | undefined
}

export interface IModal {
  visible: boolean
}

export interface IUser {
  id: number
  name: string
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
