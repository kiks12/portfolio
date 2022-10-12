import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShowcaseDescription from './ShowcaseDescription';

const Monitoring: React.FC<any> = () => {
  return (
    <div className='relative h-screen md:mt-10 sm:mt-0'>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='absolute flex items-center justify-center lg:top-20 md:top-20 sm:top-52 lg:left-10 lg:h-72 md:h-64 sm:h-40 lg:w-1/2 md:w-3/5 sm:w-4/6 bg-gray-300 rounded-xl overflow-hidden'
        >
          <img src="/Monitoring/1.png" className="h-full w-full object-cover" alt="" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='absolute flex items-center justify-center lg:bottom-28 sm:bottom-56 lg:right-10 sm:right-0 lg:h-72 md:h-64 sm:h-40 lg:w-1/2 md:w-3/5 sm:w-4/6 overflow-hidden bg-gray-300 rounded-xl shadow-xl'
        >
          <img src="/Monitoring/3.png" className="h-full w-full object-cover" alt="" />
        </motion.div>
{/* 
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          // whileInView={{
          //   scale: [1.05, 1, 1.07, 1, 1.05],
          //   y: 0,
          //   x: 0,
          //   transition: { duration: 3, repeatType: 'loop', repeat: 100 },
          // }}
          className='absolute bg-gray-300 shadow-xl h-96 w-52 rounded-xl overflow-hidden'
          style={{
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
          }}
        >
          <img src="/Cheers/3.png" style={{ 'transform': 'scale(1.05)' }} alt="" />
        </motion.div>
      </AnimatePresence> */}

        <motion.div>
          <ShowcaseDescription
            title='Visitor Monitoring System'
            tags={['UI/UX', 'Backend', 'Frontend', 'Systems Design']}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec interdum erat. Aliquam ut turpis vel risus iaculis rutrum. Maecenas malesuada, nisi vitae commodo vulputate, urna mi congue sapien, vitae blandit diam augue eu purus. Nunc in orci justo. Cras eu nibh a nisi congue vulputate. Proin ut luctus lorem. Phasellus arcu augue, tincidunt nec tincidunt et, efficitur eu mi.'
            optionalClasses='absolute left-0 bottom-0'
          />
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default Monitoring;