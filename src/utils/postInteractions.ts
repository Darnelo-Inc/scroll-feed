import { ChangeEvent } from "react"

export const searchHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setSearch: Function
) => {
  setSearch(e.target.value)
}

export const selectHandler = (value: string, setSort: Function) => {
  setSort(value)
}
