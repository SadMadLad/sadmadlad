import "./index.css"
import { BrowserRouter } from "react-router-dom"

import AnimatedRoutes from "./AnimatedRoutes"

function App() {
  return (
    <BrowserRouter basename="/sadmadlad">
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
