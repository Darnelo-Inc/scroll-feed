import { Alert, Row } from "antd"
import { FC } from "react"
import css from "../styles/Home.module.css"
import { AlertProps } from "models"

const PostModal: FC<AlertProps> = ({ title, text }) => {
  return (
    <Row justify="center" className={css.center}>
      <Alert message={title} description={text} type="info" showIcon />
    </Row>
  )
}

export default PostModal
