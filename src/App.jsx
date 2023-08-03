import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import DiaryPage from './pages/DiaryPage'
import CommandLinesPage from './pages/CommandLinesPage'
import NotesPage from './pages/NotesPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogsPage from './pages/BlogsPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <BrowserRouter basename='/sadmadlad'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route exact path='/diary' element={<DiaryPage />} />
        <Route exact path='/command-lines' element={<CommandLinesPage />} />
        <Route exact path='/notes' element={<NotesPage />} />
        <Route exact path='/projects' element={<ProjectsPage />} />
        <Route exact path='/blogs' element={<BlogsPage />} />
        <Route path='/blog/:identifier' element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
