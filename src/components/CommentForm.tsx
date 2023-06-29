import { useAddCommentMutation } from "API/jsonApi"
import { Input, Button, Form, message } from "antd"
import { useActions } from "hooks/useActions"
import { IComment } from "models"
import { FC, useState } from "react"

const CommentForm: FC = () => {
  const { toggleCommentModal } = useActions()

  const [comment, setComment] = useState<IComment>({
    name: "",
    email: "",
    body: "",
    id: 1,
    postId: 42,
  })
  const [lock, setLock] = useState<boolean>(false)

  const [addComment] = useAddCommentMutation()

  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async () => {
    try {
      setLock(true)
      await addComment(comment).unwrap()
      toggleCommentModal()
      success()
      setComment({
        name: "",
        email: "",
        body: "",
        id: 1,
        postId: 42,
      })
      form.resetFields()
    } catch (e) {
      error()
    } finally {
      setLock(false)
    }
  }

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Comment successfully added (imitation)",
      style: { marginTop: 50 },
      duration: 2,
    })
  }

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Something went wrong...",
      style: { marginTop: 50 },
      duration: 2,
    })
  }

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    types: {
      email: "${label} is not a valid email!",
    },
  }
  /* eslint-enable no-template-curly-in-string */

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
