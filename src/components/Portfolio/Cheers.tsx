import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShowcaseDescription from './ShowcaseDescription';

const Cheers: React.FC<any> = () => {
  return (
    <div className='relative h-screen red-bg-100'>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='absolute flex items-center justify-center lg:left-10 md:left-10 sm:left-0 lg:bottom-20 md:bottom-32 sm:bottom-52 lg:h-72 md:h-54 sm:h-36 lg:w-2/5 md:w-2/5 sm:w-3/5 bg-gray-300 rounded-xl overflow-hidden'
        >
          <img src="/Cheers/1.png" className='w-full h-full object-cover' alt="" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='absolute flex items-center justify-center lg:top-20 md:top-32 sm:top-52 lg:right-10 md:right-10 sm:right-0 lg:h-72 md:h-54 sm:h-36 lg:w-2/5 md:w-2/5 sm:w-3/5 rounded-xl overflow-hidden'
        >
          <img src="/Cheers/2.png" className='w-full h-full object-cover' alt="" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='absolute flex items-center justify-center bg-gray-300 shadow-xl lg:h-96 lg:w-52 md:h-2/4 md:w-40 sm:h-60 sm:w-32 rounded-xl overflow-hidden'
          style={{
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
          }}
        >
          <img src="/Cheers/3.png" className='w-full h-full object-cover' alt="" />
        </motion.div>

        <motion.div>
          <ShowcaseDescription
            title='Cheers'
            tags={['UI/UX', 'Frontend Development', 'Figma', 'React JS', 'HTML5', 'TailwindCSS']}
            description='I created a UI prototype and writtend the basic foundational code of the frontend of Cheers using React JS. To Create the UI Design and Prototype I used Figma. Cheers is a platform where users can find a bar near to them.'
            optionalClasses='absolute md:left-2/3 md:bottom-0 sm:left-0 sm:bottom-0'
          />
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default Cheers;