import { FC } from "react"
import { Layout } from "antd"
import Navbar from "./components/Navbar"
import Routing from "routes/Routing"

const App: FC = () => {
  return (
    <Layout className="white-bg">
      <Navbar />
      <Routing />
    </Layout>
  )
}

export default App
