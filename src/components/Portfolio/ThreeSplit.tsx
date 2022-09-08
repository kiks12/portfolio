import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Card from '../Card';

const ThreeSplit: React.FC<any> = () => {
  return (
    <div className="flex justify-center my-5">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Card optionalClasses='flex-1 flex flex-col h-96'>
            <div className="h-48 bg-gray-300 overflow-hidden">
              <img src="/Systems.png" style={{ 'transform':'rotate(-45deg) scale(2.3)'}}  alt="Development"/>
            </div>
            <div className="p-10">
              <h3 className='text-xl font-semibold'>Web Apps</h3>
              <p className='text-xs mt-3'>The Tech stack we use to create Web applications are ReactJS for the Frontend and NodeJS or ExpressJS for the Backend. </p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="ml-7 flex-1"
        >
          <Card optionalClasses='flex-1 flex flex-col h-96'>
            <div className="h-48 bg-gray-300 overflow-hidden">
              <img src="/Design.png" style={{ 'transform':'rotate(-45deg) scale(2.3)'}}  alt="Development"/>
            </div>
            <div className="p-10">
              <h3 className='text-xl font-semibold'>Mobile Apps</h3>
              <p className='text-xs mt-3'>We create Cross Platform Mobile Applications for prudction using Flutter. </p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="ml-7 flex-1"
        >
          <Card optionalClasses='flex-1 flex flex-col h-96'>
            <div className="h-48 bg-gray-300 overflow-hidden">
              <img src="/Development.png" style={{ 'transform':'rotate(-45deg) scale(2.3)'}}  alt="Development"/>
            </div>
            <div className="p-10">
              <h3 className='text-xl font-semibold'>UI/UX</h3>
              <p className='text-xs mt-3'>We also provide UI/UX design materials for clients using Figma prototyping.</p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ThreeSplit;