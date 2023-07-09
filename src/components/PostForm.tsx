import { FC, useState } from "react"
import { Input, Button, Form, message } from "antd"
import { useAddPostMutation } from "API/jsonApi"
import { useActions } from "hooks/useActions"
import { IPost } from "models"
import { addPostMessage, error, errorMessage, success } from "utils/messageApi"
import { postTemplate } from "utils/templates"

const PostForm: FC = () => {
  const { togglePostModal } = useActions()

  const [post, setPost] = useState<IPost>(postTemplate)
  const [lock, setLock] = useState<boolean>(false)

  const [addPost] = useAddPostMutation()

  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async () => {
    try {
      setLock(true)
      await addPost(post).unwrap()
      togglePostModal()
      success(addPostMessage, messageApi)
      setPost(postTemplate)
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

export default PostForm
