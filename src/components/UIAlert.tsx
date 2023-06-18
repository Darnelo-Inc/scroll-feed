import { Alert, Row } from "antd"
import { FC } from "react"
import css from "../styles/Home.module.css"

const UIAlert: FC = () => {
  return (
    <Row justify="center" className={css.center}>
      <Alert
        message="Posts not found"
        description="List of posts is empty or failed to load data from the server"
        type="info"
        showIcon
      />
    </Row>
  )
}

export default UIAlert
