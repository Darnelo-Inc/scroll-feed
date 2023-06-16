import { useAddPostMutation } from "API/jsonApi"
import { Input, Button, Form, notification, message } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useActions } from "hooks/useActions"
import { IPost } from "models"
import { FC, useEffect, useState } from "react"

const UIForm: FC = () => {
  const [post, setPost] = useState<IPost>({ title: "", body: "", id: 1 })
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const { toggleVisible } = useActions()
  const [addPost] = useAddPostMutation()

  const handleSubmit = async () => {
    try {
      await addPost(post).unwrap()
      toggleVisible()
      success()
      setPost({ title: "", body: "", id: 1 })
      form.resetFields()
    } catch (e) {
      error()
    }
  }

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Post successfully added",
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
          rules={[{ required: true, message: "Post title is required" }]}
        >
          <Input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Post description"
          name="body"
          rules={[{ required: true, message: "Post description is required" }]}
        >
          <TextArea
            rows={4}
            placeholder="Type post description here..."
            style={{ maxHeight: "200px" }}
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UIForm
