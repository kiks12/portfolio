import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShowcaseDescription from './ShowcaseDescription';

const POS: React.FC<any> = () => {
  return (
    <div className='relative h-screen lg:mt-10 sm:mt-0'>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='absolute flex items-center justify-center lg:bottom-20 md:bottom-20 sm:bottom-52 lg:left-10 lg:h-72 md:h-64 sm:h-40 lg:w-1/2 md:w-3/5 sm:w-4/6 bg-gray-300 rounded-xl overflow-hidden'
        >
          <img src="/POS/1.png" className='w-full h-full object-cover' alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='absolute flex items-center justify-center lg:top-20 md:top-28 sm:top-56 lg:right-10 sm:right-0 lg:h-72 md:h-64 sm:h-40 lg:w-1/2 md:w-3/5 sm:w-4/6 overflow-hidden bg-gray-300 rounded-xl shadow-xl'
        >
          <img src="/POS/2.png" className='w-full h-full object-cover' alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div>
          <ShowcaseDescription
            title='Four Angels'
            tags={['UI/UX', 'Web Development', 'Systems Design', 'Analytics', 'Vue JS', 'PHP', 'HTML5', 'CSS3']}
          description='This Point of Sale System is a custom built system for our retail store Four Angels. It is built using PHP for the backend and Vue JS in the frontend. It uses the basic barcode scanning and receipt printing mechanism. Also, it has a sophisticated analytics and report tools integration. The only downside is that it is not integrated with a Cash Register.'
            optionalClasses='absolute md:left-2/3 md:bottom-0 sm:left-0 bottom-0'
          />
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default POS;