import NavBar from '../components/shared/NavBar'
import Hero from '../components/DiaryPage/Hero'
import Section from '../components/DiaryPage/Section'
import Diary from '../assets/diary.json'

export default function DiaryPage() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Hero />
      <div className="w-full md:w-3/4">
        { Diary.map((diarySection, index) => <Section key={index} title={diarySection.title} entries={diarySection.entries}/>) }
      </div>
    </div>
  )
}
