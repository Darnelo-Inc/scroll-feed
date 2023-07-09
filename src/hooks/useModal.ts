export const useModal = (toggle: Function) => {
  const handleOk = (setConfirmLoading: Function) => {
    setConfirmLoading(true)
    setTimeout(() => {
      toggle()
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    toggle()
  }

  return { handleOk, handleCancel }
}
