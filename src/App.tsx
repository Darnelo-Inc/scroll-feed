import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Layout } from "antd"
import Navbar from "./components/Navbar"
import PostPage from "pages/PostPage"

function App() {
  return (
    <Layout className="white-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </Layout>
  )
}

export default App
