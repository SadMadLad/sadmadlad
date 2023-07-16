// DiaryPage
import Section from '../components/DiaryPage/Section'
// Assets
import Diary from '../assets/diary.json'
// Shared
import SharedHero from '../components/shared/SharedHero'
import NavBar from '../components/shared/NavBar'

export default function DiaryPage() {
  const sortedDiary = Diary.sort((a, b) => a.title > b.title)

  return (
    <div className="flex flex-col items-center pb-6">
      <NavBar />
      <SharedHero title="Diary" heroCaption="This diary includes some errors and bugs I encountered and how I fixed them, along with some code snippets." />
      <div className="w-full md:w-3/4">
        {sortedDiary.map((diarySection, index) => <Section key={index} title={diarySection.title} entries={diarySection.entries} />)}
      </div>
    </div>
  )
}
