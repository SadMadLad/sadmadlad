// CommandLinesPage
import Main from "../components/CommandLinesPage/Main"
// Shared
import NavBar from "../components/shared/NavBar"
import SharedHero from "../components/shared/SharedHero"

export default function CommandLinesPage() {
  return <div className="flex flex-col items-center pb-6">
    <NavBar />
    <SharedHero title="Command Lines" heroCaption="Some useful command lines that I learnt on the way" />
    <div className="w-full md:w-3/4">
      <Main />
    </div>
  </div>
}
