import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShowcaseDescription from './ShowcaseDescription';

const POS: React.FC<any> = () => {
  return (
    <div className='relative h-screen md:mt-10 sm:mt-0'>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='absolute bottom-20 left-10 h-72 bg-gray-300 rounded-xl overflow-hidden'
          style={{ 'width':'45vw' }}
        >
          <img src="/POS/1.png" style={{ 'transform': 'scale(1.2)' }} alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          
          className='absolute top-20 right-20 h-64 bg-gray-300 rounded-xl overflow-hidden shadow-xl'
          style={{ 'width':'45vw' }}
        >
          <img src="/POS/2.png" style={{ 'transform': 'scale(1.01)', 'backgroundSize': 'cover' }} alt="" />
        </motion.div>
      </AnimatePresence>
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

      <AnimatePresence>
        <motion.div>
          <ShowcaseDescription
            title='Four Angels'
            tags={['UI/UX', 'Web Development', 'Systems Design', 'Analytics']}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec interdum erat. Aliquam ut turpis vel risus iaculis rutrum. Maecenas malesuada, nisi vitae commodo vulputate, urna mi congue sapien, vitae blandit diam augue eu purus. Nunc in orci justo. Cras eu nibh a nisi congue vulputate. Proin ut luctus lorem. Phasellus arcu augue, tincidunt nec tincidunt et, efficitur eu mi.'
            optionalClasses='absolute md:left-2/3 md:bottom-0 sm:left-0 bottom-0'
          />
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default POS;