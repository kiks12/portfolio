import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShowcaseDescription from './ShowcaseDescription';

const BlueCollar: React.FC<any> = () => {
  return (
    <div className='relative h-screen lg:mt-10 sm:mt-0'>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='absolute flex items-center justify-center lg:left-10 md:left-10 sm:left-0 lg:top-20 md:top-32 sm:top-52 lg:h-72 md:h-54 sm:h-36 lg:w-2/5 md:w-2/5 sm:w-3/5 bg-gray-300 rounded-xl overflow-hidden'
        >
          <img src="/BlueCollar/2.png" className='w-full h-full object-cover' alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          
          className='absolute flex items-center justify-center lg:bottom-20 md:bottom-32 sm:bottom-52 lg:right-10 md:right-10 sm:right-0 lg:h-72 md:h-54 sm:h-36 lg:w-2/5 md:w-2/5 sm:w-3/5 rounded-xl overflow-hidden'
        >
          <img src="/BlueCollar/3.png" className='w-full h-full object-cover' alt="" />
        </motion.div>
      </AnimatePresence>

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
          className='absolute flex items-center justify-center bg-gray-300 shadow-xl lg:h-96 lg:w-52 md:h-2/4 md:w-40 sm:h-60 sm:w-32 rounded-xl overflow-hidden'
          style={{
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
          }}
        >
          <img src="/BlueCollar/1.png" className='w-full h-full object-cover' alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div>
          <ShowcaseDescription
            title='Blueu'
            tags={['UI/UX', 'Frontend Development', 'Mobile Development']}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec interdum erat. Aliquam ut turpis vel risus iaculis rutrum. Maecenas malesuada, nisi vitae commodo vulputate, urna mi congue sapien, vitae blandit diam augue eu purus. Nunc in orci justo. Cras eu nibh a nisi congue vulputate. Proin ut luctus lorem. Phasellus arcu augue, tincidunt nec tincidunt et, efficitur eu mi.'
            optionalClasses='absolute left-0 bottom-0'
          />
        </motion.div>
      </AnimatePresence>

    </div>
  )
}

export default BlueCollar;