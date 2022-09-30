import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ShowcaseDescriptionProps {
  title: string;
  tags: string[];
  description: string;
  optionalClasses?: string;
  isLeft?: boolean;
  children?: any;
}

const ShowcaseDescription: React.FC<ShowcaseDescriptionProps> = ({optionalClasses, tags, description, title, isLeft }) => {
  return (
    <AnimatePresence>
      <div className={isLeft ? 'flex flex-row' : 'flex flex-row-reverse'}>
        <div className={'flex flex-col md:w-[33%] sm:w-100' + ' ' + optionalClasses}>
          <motion.h3 
            animate={{
              y:0,
              opacity: 1,
            }}
            initial={{
              y:75,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.6
            }}
            className='text-2xl font-medium my-2'
          >
            {title}
          </motion.h3>
          <motion.div 
            className="flex overflow-scroll"
            animate={{
              y:0,
              opacity: 1,
            }}
            initial={{
              y:75,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.7
            }}
          >
            <div className="flex">
              {
                tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className={"text-black uppercase whitespace-nowrap py-2 px-4 bg-indigo-100 font-medium rounded-full " + (idx === 0 ? '' : 'ml-2')}
                    style={{"fontSize": "0.6em"}}
                  >
                    {tag}
                  </div>
                ))
              }
            </div>
          </motion.div>
          <motion.div
            className='mt-5 text-xs'
            animate={{
              y:0,
              opacity: 1,
            }}
            initial={{
              y:75,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8
            }}
          >
            {description}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
};

export default ShowcaseDescription;