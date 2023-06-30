import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import DiaryEntry from './DiaryEntry'
import { motion, AnimatePresence } from 'framer-motion'

export default function Section() {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <section className="px-2 md:px-0">
      <div className="flex flex-row gap-2 items-center border-b-2 border-b-lite">
        <h4 className="font-serif font-bold text-2xl">Ruby on Rails</h4>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0, cursor: 'pointer' }} onClick={() => setExpanded(!isExpanded)}><ChevronDownIcon className="w-8 h-8" /></motion.div>
      </div>
      <AnimatePresence>
        {isExpanded &&
          <>
            <DiaryEntry />
            <DiaryEntry />
            <DiaryEntry />
          </>
        }
      </AnimatePresence>
    </section>
  )
}
