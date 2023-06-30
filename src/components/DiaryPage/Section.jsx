import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DiaryEntry from './DiaryEntry'

export default function Section() {
  return (
    <section>
      <div className="py-2.5 flex flex-row gap-2 items-center border-b-2 border-b-lite">
        <h4 className="font-serif font-bold text-2xl">Ruby on Rails</h4>
        <ChevronDownIcon className="w-8 h-8"/>
      </div>
      <DiaryEntry />
    </section>
  )
}