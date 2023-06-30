import NavBar from '../components/shared/NavBar'
import Hero from '../components/DiaryPage/Hero'
import Section from '../components/DiaryPage/Section'

export default function DIaryPage() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Hero />
      <div className="w-full md:w-3/4">
        <Section />

      </div>
    </div>
  )
}