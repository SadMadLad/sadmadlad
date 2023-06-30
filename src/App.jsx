import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import DiaryPage from './pages/DiaryPage'

function App() {
  return (
    <BrowserRouter basename='/sadmadlad'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/diary' element={<DiaryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
