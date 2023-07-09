import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Layout } from "antd"
import Navbar from "./components/Navbar"
import PostPage from "pages/PostPage"

const App: FC = () => {
  return (
    <Layout className="white-bg">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
