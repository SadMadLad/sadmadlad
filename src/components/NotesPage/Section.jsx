// My Component
import Note from "./Note"
// Node Imports
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Section to render notes for a specific topic
export default function Section({ title, notes }) {
  const sortedNotes = notes.sort((a, b) => a.title > b.title)
  const [isExpanded, setExpanded] = useState(false)

  return (
    <section className="px-2 md:px-0">
      <div className="flex flex-row gap-2 items-center border-b-2 border-b-lite">
        <h4 className="font-serif font-bold text-2xl">{title}</h4>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0, cursor: "pointer" }} onClick={() => setExpanded(!isExpanded)}><ChevronDownIcon className="w-8 h-8" /></motion.div>
      </div>
      <AnimatePresence>
        {isExpanded &&
          sortedNotes.map((note, index) =>
          <Note
            key={index}
            title={note.title}
            paragraphs={note.paragraphs}
          />)
        }
      </AnimatePresence>
    </section>
  )
}
