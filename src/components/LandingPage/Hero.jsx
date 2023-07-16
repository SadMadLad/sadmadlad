// Node Imports
import { Link } from 'react-router-dom'

// Hero section of the landing page
export default function Hero() {
  return (
    <main className="my-20 flex flex-col gap-10 items-center px-8">
      <h6 className="text-2xl font-black">Hi! I am Saad</h6>
      <p className="text-2xl sm:text-4xl font-extralight text-center w-full md:w-2/3">I am a Software Developer with love for Machine Learning and Data Science.</p>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <button className="shadow-xl border border-opacity-25 border-lite font-serif bg-darklite text-2xl px-6 py-4 hover:bg-lite hover:text-darklite duration-300 transition-colors">Check Projects</button>
        <Link to="/diary" className="shadow-xl border border-opacity-25 border-lite font-serif bg-darklite text-2xl px-6 py-4 hover:bg-lite hover:text-darklite duration-300 transition-colors">Diary</Link>
        <Link to="/notes" className="shadow-xl border border-opacity-25 border-lite font-serif bg-darklite text-2xl px-6 py-4 hover:bg-lite hover:text-darklite duration-300 transition-colors">Notes</Link>
        <Link to="/command-lines" className="shadow-xl border border-opacity-25 border-lite font-serif bg-darklite text-2xl px-6 py-4 hover:bg-lite hover:text-darklite duration-300 transition-colors">Command Lines</Link>
      </div>
    </main>
  )
}
