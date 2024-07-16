import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Pages/Home/Home"
import About from './Pages/About/About'
import Programs from './Pages/Programs/Programs'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'

import "./assets/global.css"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/blog" element={< Blog />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>

    </>
  )
}

export default App
