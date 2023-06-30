import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function DiaryEntry() {
  const [isExpanded, setExpanded] = useState(true)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-2"
    >
      <div className="flex flex-row gap-2 items-center border-b border-b-lite">
        <h5 className="font-bold text-lg">Complex Password Validation Devise</h5>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0, cursor: 'pointer' }} onClick={() => setExpanded(!isExpanded)}><ChevronDownIcon className="w-6 h-6" /></motion.div>
      </div>
      <AnimatePresence>
        {isExpanded &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-2.5"
          >
            <div className="flex flex-col gap-0.5">
              <span><b>Type: </b><span>Bug</span></span>
              <span><b>Updated On: </b><span>28th June, 2023</span></span>
            </div>
            <div>
              <h6 className="font-semibold">Description:</h6>
              <p>Unable to apply complex validation (like using regex) for password in devise.</p>
            </div>
            <div>
              <h6 className="font-semibold">Solution: </h6>
              <p>Devise takes in the password as instance variable. <code className="bg-zinc-700">Devise</code></p>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  )
}
