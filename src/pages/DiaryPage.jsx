import NavBar from '../components/shared/NavBar'
import Hero from '../components/DiaryPage/Hero'
import Section from '../components/DiaryPage/Section'
import Diary from '../assets/diary.json'

export default function DiaryPage() {
  const sortedDiary = Diary.sort((a, b) => a.title > b.title)

  return (
    <div className="flex flex-col items-center pb-6">
      <NavBar />
      <Hero />
      <div className="w-full md:w-3/4">
        {sortedDiary.map((diarySection, index) => <Section key={index} title={diarySection.title} entries={diarySection.entries} />)}
      </div>
    </div>
  )
}
