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
          className='absolute lg:left-20 lg:bottom-0 md:left-10 md:bottom-32 sm:left-0 sm:bottom-52 lg:h-3/4 lg:w-52 md:h-54 md:w-2/5 sm:h-36 sm:w-3/5 bg-gray-300 rounded-xl overflow-hidden'
        >
          <img src="/Image-Processing/2.png" style={{ 'transform': 'scale(1.05)' }} alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='absolute lg:left-60 lg:bottom-10 md:left-10 md:bottom-32 sm:left-0 sm:bottom-52 lg:h-3/4 lg:w-52 md:h-54 md:w-2/5 sm:h-36 sm:w-3/5 bg-gray-300 rounded-xl overflow-hidden shadow-xl'
        >
          <img src="/Image-Processing/4.png" style={{ 'transform': 'scale(1.05)' }} alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          
          className='absolute lg:top-20 lg:right-96 md:top-32 md:right-10 sm:top-52 sm:right-0 lg:h-3/4 lg:w-52 md:h-54 md:w-2/5 sm:h-36 sm:w-3/5 bg-gray-300 rounded-xl overflow-hidden shadow-xl'
        >
          <img src="/Image-Processing/3.png" style={{ 'transform': 'scale(1.05)' }} alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div>
          <ShowcaseDescription
            title='Android Image Processing'
            tags={['UI/UX', 'Flutter', 'Mobile Development']}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec interdum erat. Aliquam ut turpis vel risus iaculis rutrum. Maecenas malesuada, nisi vitae commodo vulputate, urna mi congue sapien, vitae blandit diam augue eu purus. Nunc in orci justo. Cras eu nibh a nisi congue vulputate. Proin ut luctus lorem. Phasellus arcu augue, tincidunt nec tincidunt et, efficitur eu mi.'
            optionalClasses='absolute md:left-2/3 md:bottom-0 sm:left-0 sm:bottom-0'
          />
        </motion.div>
      </AnimatePresence>

    </div>
  )
}

export default ImageProcessing;