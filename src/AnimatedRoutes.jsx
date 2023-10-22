import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import LandingPage from "./pages/LandingPage"
import DiaryPage from "./pages/DiaryPage"
import CommandLinesPage from "./pages/CommandLinesPage"
import NotesPage from "./pages/NotesPage"
import ProjectsPage from "./pages/ProjectsPage"
import BlogsPage from "./pages/BlogsPage"
import BlogPage from "./pages/BlogPage"

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/command-lines" element={<CommandLinesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        
        {/* <Route path="/notes" element={<NotesPage />} /> */}
        {/* <Route path="/blogs" element={<BlogsPage />} /> */}
        {/* <Route path="/blog/:identifier" element={<BlogPage />} /> */}
      </Routes>
    </AnimatePresence>
  )
}
