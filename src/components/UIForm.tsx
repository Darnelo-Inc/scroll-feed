import { useAddPostMutation } from "API/jsonApi"
import { Input, Button, Form, message } from "antd"
import { useActions } from "hooks/useActions"
import { IPost } from "models"
import { FC, useState } from "react"

const UIForm: FC = () => {
  const { toggleVisible } = useActions()

  const [post, setPost] = useState<IPost>({ title: "", body: "", id: 1 })
  const [lock, setLock] = useState<boolean>(false)

  const [addPost] = useAddPostMutation()

  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async () => {
    try {
      setLock(true)
      await addPost(post).unwrap()
      toggleVisible()
      success()
      setPost({ title: "", body: "", id: 1 })
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
      content: "Post successfully added (imitation)",
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
      >
        <Form.Item
          label="Post title"
          name="title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Post description"
          name="body"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Type post description here..."
            style={{ maxHeight: "200px" }}
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={lock}
            disabled={lock}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UIForm
