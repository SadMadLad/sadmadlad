import NavBar from "../components/shared/NavBar"
import Hero from "../components/CommandLinesPage/Hero"
import Main from "../components/CommandLinesPage/Main"

export default function CommandLinesPage() {
  return <div className="flex flex-col items-center pb-6">
    <NavBar />
    <Hero />
    <div className="w-full md:w-3/4">
      <Main />
    </div>
  </div>
}
