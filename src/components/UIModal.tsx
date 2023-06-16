import { useState, FC } from "react"
import { Modal } from "antd"
import { useActions } from "hooks/useActions"
import { useAppSelector } from "hooks/useRedux"
import { selectModal } from "store/selectors"
import css from "../styles/Modal.module.css"
import UIForm from "./UIForm"

const UIModal: FC = () => {
  const { toggleVisible } = useActions()
  const visible = useAppSelector(selectModal)

  const [confirmLoading, setConfirmLoading] = useState(false)

  const showModal = () => {
    toggleVisible()
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      toggleVisible()
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log("Clicked cancel button")
    toggleVisible()
  }

  return (
    <Modal
      title="Create post"
      open={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      className={css.modal}
      footer={null}
    >
      <UIForm />
    </Modal>
  )
}

export default UIModal
