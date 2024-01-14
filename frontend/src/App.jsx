import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
