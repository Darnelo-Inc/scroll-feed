import { useState, FC } from "react"
import { Modal } from "antd"
import { useActions } from "hooks/useActions"
import { useAppSelector } from "hooks/useRedux"
import { useModal } from "hooks/useModal"
import { selectModal } from "store/selectors"
import PostForm from "./PostForm"
import css from "../styles/Modal.module.css"

const PostModal: FC = () => {
  const [confirmLoading, setConfirmLoading] = useState(false)

  const { postModal } = useAppSelector(selectModal)
  const { togglePostModal } = useActions()

  const { handleOk, handleCancel } = useModal(togglePostModal)

  return (
    <Modal
      title="Create post"
      open={postModal}
      onOk={() => handleOk(setConfirmLoading)}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      centered
      className={css.modal}
      footer={null}
    >
      <PostForm />
    </Modal>
  )
}

export default PostModal
