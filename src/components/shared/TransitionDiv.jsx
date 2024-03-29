import { motion, useIsPresent } from "framer-motion"

export default function TransitionDiv() {
  const isPresent = useIsPresent()

  return (
    <motion.div
      className="fixed w-full h-full top-0 bottom-0 right-0 bg-white"
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.33, ease: "circOut" } }}
      exit={{ scaleX: 1, transition: { duration: 0.33, ease: "circIn" } }}
      style={{ originX: isPresent ? 0 : 1 }}
    />
  )
}
