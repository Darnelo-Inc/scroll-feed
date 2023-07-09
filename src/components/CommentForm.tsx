import { FC, useState } from "react"
import { Input, Button, Form, message } from "antd"
import { useAddCommentMutation } from "API/jsonApi"
import { useActions } from "hooks/useActions"
import { IComment } from "models"
import { commentTemplate } from "utils/templates"
import {
  addCommentMessage,
  error,
  errorMessage,
  success,
  validateMessages,
} from "utils/messageApi"

const CommentForm: FC = () => {
  const [comment, setComment] = useState<IComment>(commentTemplate)
  const [lock, setLock] = useState<boolean>(false)

  const { toggleCommentModal } = useActions()
  const [addComment] = useAddCommentMutation()

  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async () => {
    try {
      setLock(true)
      await addComment(comment).unwrap()
      toggleCommentModal()
      success(addCommentMessage, messageApi)
      setComment(commentTemplate)
      form.resetFields()
    } catch (e) {
      error(errorMessage, messageApi)
    } finally {
      setLock(false)
    }
  }

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleSubmit}
        autoComplete="off"
        form={form}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Write your email"
          name="email"
          rules={[{ type: "email", required: true }]}
        >
          <Input
            value={comment.email}
            onChange={(e) => setComment({ ...comment, email: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Comment"
          name="body"
          rules={[{ required: true, message: "Comment text is required" }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Type comment here..."
            style={{ maxHeight: "200px" }}
            value={comment.body}
            onChange={(e) => setComment({ ...comment, body: e.target.value })}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={lock}
            disabled={lock}
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CommentForm
