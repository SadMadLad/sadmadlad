// LandingPage
import Hero from "../components/LandingPage/Hero"
import ProgrammingLanguages from "../components/LandingPage/ProgrammingLanguages"
import Frameworks from "../components/LandingPage/Frameworks"
// Shared
import NavBar from "../components/shared/NavBar"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Hero />
      <ProgrammingLanguages />
      <Frameworks />
    </div>
  )
}
