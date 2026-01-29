import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Exercise1 from './pages/Exercise1'
import Exercise2 from './pages/Exercise2'
import Homepage from './pages/Homepage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exercise1" element={<Exercise1 />} />
            <Route path="/exercise2" element={<Exercise2 />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App