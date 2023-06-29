import { useState, FC } from "react"
import { Modal } from "antd"
import { useActions } from "hooks/useActions"
import { useAppSelector } from "hooks/useRedux"
import { selectModal } from "store/selectors"
import css from "../styles/Modal.module.css"
import CommentForm from "./CommentForm"

const CommentModal: FC = () => {
  const [confirmLoading, setConfirmLoading] = useState(false)

  const { commentModal } = useAppSelector(selectModal)
  const { toggleCommentModal } = useActions()

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      toggleCommentModal()
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    toggleCommentModal()
  }

  return (
    <Modal
      title="Add comment to the post"
      open={commentModal}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      centered
      className={css.modal}
      footer={null}
    >
      <CommentForm />
    </Modal>
  )
}

export default CommentModal
