// My Components
import DiaryEntry from "./DiaryEntry"
// Node Imports
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Section to render one topic (Like Python, Ruby on Rails etc.)
export default function Section({ title, entries }) {
  const sortedEntries = entries.sort((a, b) => a.title > b.title)
  const [isExpanded, setExpanded] = useState(false)

  return (
    <section className="mt-2.5 px-2 md:px-0">
      <div className="flex flex-row gap-2 items-center border-b-2 border-b-lite">
        <h4 className="font-serif font-bold text-2xl">{title}</h4>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0, cursor: "pointer" }} onClick={() => setExpanded(!isExpanded)}><ChevronDownIcon className="w-8 h-8" /></motion.div>
      </div>
      <AnimatePresence>
        {isExpanded &&
          sortedEntries.map((entry, index) =>
          <DiaryEntry
            key={index}
            title={entry.title}
            type={entry.type}
            updatedOn={entry.updated_on}
            description={entry.description}
            solution={entry.solution}
          />)
        }
      </AnimatePresence>
    </section>
  )
}
