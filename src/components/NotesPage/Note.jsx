// My Components
import CodeParagraph from "../shared/CodeParagraph"
// Node Imports
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

// Component to render one single note
export default function Note({ title, paragraphs }) {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-2"
    >
      <div className="flex flex-row gap-2 items-center border-b border-b-lite">
        <h5 className="font-bold text-lg">{title}</h5>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0, cursor: "pointer" }} onClick={() => setExpanded(!isExpanded)}><ChevronDownIcon className="w-6 h-6" /></motion.div>
      </div>
      <AnimatePresence>
        {isExpanded &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-2.5 py-2"
          >
            { paragraphs.map((paragraph, index) => <CodeParagraph key={index} paragraph={paragraph} />)}
          </motion.div>}
        </AnimatePresence>
    </motion.div>
  )
}
