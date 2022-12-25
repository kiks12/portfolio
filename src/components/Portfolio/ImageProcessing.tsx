import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShowcaseDescription from './ShowcaseDescription';

const ImageProcessing: React.FC<any> = () => {
  return (
    <div className='relative h-screen'>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='absolute flex items-center justify-center lg:left-20 md:left-10 sm:left-0 lg:bottom-0 md:bottom-20 sm:bottom-52 lg:h-3/4 md:h-1/2 sm:h-1/2 lg:w-52 md:w-1/5 sm:w-40 bg-gray-300 rounded-xl overflow-hidden'
        >
          <img src="/Image-Processing/2.png" className='w-full h-full object-cover' alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='absolute flex items-center justify-center lg:left-60 md:left-36 sm:left-36 lg:bottom-10 md:bottom-32 sm:bottom-60 lg:h-3/4 md:h-1/2 sm:h-1/2 lg:w-52 md:w-1/5 sm:w-40 bg-gray-300 rounded-xl overflow-hidden shadow-xl'
        >
          <img src="/Image-Processing/4.png" className='w-full h-full object-cover' alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          
          className='absolute flex items-center justify-center lg:left-96 md:left-64 sm:left-72 lg:bottom-20 md:bottom-44 sm:bottom-72 lg:h-3/4 md:h-1/2 sm:h-1/2 lg:w-52 md:w-1/5 sm:w-40 bg-gray-300 rounded-xl overflow-hidden shadow-xl'
        >
          <img src="/Image-Processing/3.png" className='w-full h-full object-cover' alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div>
          <ShowcaseDescription
            title='EyeTechnology'
            tags={['UI/UX', 'Flutter', 'Mobile Development']}
            description='EyeTechnology is a thesis requirement application I created using Flutter and Python. I used Python for the machine learning part and Flutter for the Mobile Application Framework. EyeTechnology has Image, Color, and Text Recognition, built to help those people who are visually impaired.'
            optionalClasses='absolute md:left-2/3 md:bottom-0 sm:left-0 sm:bottom-0'
          />
        </motion.div>
      </AnimatePresence>

    </div>
  )
}

export default ImageProcessing;