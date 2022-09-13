import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TwoSplit: React.FC<any> = () => {
  return (
    <div className='flex md:flex-row sm:flex-col justify-between mt-16 mb-24'>
      <h3 className='flex-1 text-2xl font-medium leading-snug'>Web Applications, E-commerce, and Mobile Applications for small sized businesses.</h3>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='flex-1 md:ml-10 md:mt-0 sm:mt-10'
        >
          We help solo entepreneurs, and small businesses like you create your own online presence in no time!
        </motion.div>
      </AnimatePresence>
    </div>
  )
};

export default TwoSplit;