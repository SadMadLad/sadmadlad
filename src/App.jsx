import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import DiaryPage from './pages/DiaryPage'
import CommandLinesPage from './pages/CommandLinesPage'
import NotesPage from './pages/NotesPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <BrowserRouter basename='/sadmadlad'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/diary' element={<DiaryPage />} />
        <Route path='/command-lines' element={<CommandLinesPage />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
