import { useState, FC } from "react"
import { Modal } from "antd"
import { useAppSelector } from "hooks/useRedux"
import { useModal } from "hooks/useModal"
import { useActions } from "hooks/useActions"
import { selectModal } from "store/selectors"
import CommentForm from "./CommentForm"
import css from "../styles/Modal.module.css"

const CommentModal: FC = () => {
  const [confirmLoading, setConfirmLoading] = useState(false)

  const { toggleCommentModal } = useActions()

  const { commentModal } = useAppSelector(selectModal)
  const { handleOk, handleCancel } = useModal(toggleCommentModal)

  return (
    <Modal
      title="Add comment to the post"
      open={commentModal}
      onOk={() => handleOk(setConfirmLoading)}
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
