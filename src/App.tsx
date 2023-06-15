import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Layout } from "antd"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Layout className="white-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
