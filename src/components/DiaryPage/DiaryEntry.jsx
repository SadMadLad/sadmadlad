// My Components
import SolutionWithSteps from "./SolutionWithSteps"
import CodeParagraph from "../shared/CodeParagraph"
// Node Imports
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// One single entry component of Diary
export default function DiaryEntry({ title, type, updatedOn, description, solution }) {
  const [isExpanded, setExpanded] = useState(false)
  const typeTag = typeName => {
    if (typeName === 'Bug') { return <button className="bg-red-600 px-1.5 py-0.5 rounded font-semibold">{typeName}</button> }
    if (typeName === 'Feature') { return <button className="bg-green-600 px-1.5 py-0.5 rounded font-semibold">{typeName}</button> }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-2"
    >
      <div className="flex flex-row gap-2 items-center border-b border-b-lite">
        <h5 className="font-bold text-lg">{title}</h5>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0, cursor: 'pointer' }} onClick={() => setExpanded(!isExpanded)}><ChevronDownIcon className="w-6 h-6" /></motion.div>
      </div>
      <AnimatePresence>
        {isExpanded &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-2.5 py-2"
          >
            <div className="flex flex-col gap-0.5">
              <span>{ typeTag(type) }</span>
              <span><b>Updated On: </b><span>{updatedOn}</span></span>
            </div>
            <div>
              <h6 className="font-semibold">Description:</h6>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div>
              <h6 className="font-semibold">Solution: </h6>
              { solution.has_steps ? <SolutionWithSteps solution={solution} /> : <CodeParagraph paragraph={solution} /> }
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  )
}
