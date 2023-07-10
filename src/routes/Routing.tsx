import { Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import PostPage from "pages/PostPage"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default Routing
