import React from 'react'
import { motion } from 'framer-motion'
const FramerMotion = () => {
  return (
    <>
      <motion.div 
        className=' left-11 w-[7rem] h-[7rem] rounded-full bg-blue-700 z-10'
        animate={{ 
          scale: [1,2,2,1,1], 
          rotate: [0,0,180,180,0], 
          borderRadius: ['0%', '0%', '50%', '50%', '0%']
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          // repeat: Infinity,
          repeatDelay: 4,
          bounce:0.5
        }}
      >

      </motion.div>
      <motion.div
          drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className=' left-11 w-[7rem] h-[7rem] rounded-full bg-red-700 z-10'
        
      >

      </motion.div>
    </>

  )
}

export default FramerMotion