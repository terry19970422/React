import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Profiler, useState } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'
// import Navbar from './layouts/Navbar'
// import Footer from './layouts/Footer'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      {/* 連結到各頁面連結 */}
      {/* 路由表 */}
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home auth={auth} />} />
        <Route path="about" element={<About auth={auth} />} />
        <Route path="product" element={<Product auth={auth} />} />
        <Route path="login" element={<Login auth={auth} setAuth={setAuth} />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
