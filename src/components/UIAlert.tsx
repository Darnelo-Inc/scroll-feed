import { FC } from "react"
import { Alert, Row } from "antd"
import { AlertProps } from "models"
import css from "../styles/Home.module.css"

const PostModal: FC<AlertProps> = ({ title, text }) => {
  return (
    <Row justify="center" className={css.center}>
      <Alert message={title} description={text} type="info" showIcon />
    </Row>
  )
}

export default PostModal
