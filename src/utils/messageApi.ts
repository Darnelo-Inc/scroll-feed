import { MessageInstance } from "antd/es/message/interface"

export const success = (content: string, messageApi: MessageInstance) => {
  messageApi.open({
    type: "success",
    content,
    style: { marginTop: 50 },
    duration: 2,
  })
}

export const addCommentMessage = "Comment successfully added (imitation)"
export const addPostMessage = "Post successfully added (imitation)"

export const error = (content: string, messageApi: MessageInstance) => {
  messageApi.open({
    type: "error",
    content,
    style: { marginTop: 50 },
    duration: 2,
  })
}

export const errorMessage = "Something went wrong..."

/* eslint-disable no-template-curly-in-string */
export const validateMessages = {
  types: {
    email: "${label} is not a valid email!",
  },
}
/* eslint-enable no-template-curly-in-string */
