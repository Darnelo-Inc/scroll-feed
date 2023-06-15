import { Input, Button, Form } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useActions } from "hooks/useActions"
import { FC } from "react"

const UIForm: FC = () => {
  const { toggleVisible } = useActions()

  const onFinish = () => {
    setTimeout(toggleVisible, 1000)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Post title"
        name="title"
        rules={[{ required: true, message: "Post title is required" }]}
      >
        <Input />
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
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UIForm
