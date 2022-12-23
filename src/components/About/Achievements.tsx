import { AnimatePresence, motion } from 'framer-motion';
import type React from 'react';

const Achievements: React.FC<any> = () => {
  return (
    <AnimatePresence>
      <div className='mt-10'>
        <motion.h3 
          className='text-2xl font-medium'
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
        >
          Achievements and Awards
        </motion.h3>
        <div className="flex md:flex-row sm:flex-col mt-12">
          <div className="md:w-1/2 sm:w-full md:mr-4 sm:mr-0">
            <h3 className='text-3xl font-medium'>3rd Place 🥉</h3>
            <p className='text-xs mt-2'>
              in Web Designing, Division Level, Representing Claro M. Recto Information and Communication Technology High School (s.y. 2017-2018)
            </p>
          </div>
          <div className="md:w-1/2 sm:w-full md:mt-0 sm:mt-10">
            <h3 className='text-3xl font-medium'>2nd Runner Up 🥉</h3>
            <p className="text-xs mt-2">
              in Web Development Challenge, Inter-Course Level, Representing Bachelor of Science in Computer Engineering against the whole College of Computing Studies (s.y. 2021-2022)
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row sm:flex-col mt-12">
          <div className="md:w-1/2 sm:w-full md:mr-4 sm:mr-0">
            <h3 className='text-3xl font-medium'>Champion 🏅</h3>
            <p className='text-xs mt-2'>
              in Python Competitive Programming in the 6th CpE Challenge in ICpEP Region 3 (Regionals s.y. 2022-2023)
            </p>
          </div>
        </div>
    </AnimatePresence>
  )
}

export default Achievements;