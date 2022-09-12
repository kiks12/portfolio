import type React from 'react';
import { AnimatePresence } from 'framer-motion';

interface ShowcaseDescriptionProps {
  title: string;
  tags: string[];
  description: string;
  optionalClasses?: string;
  children?: any;
}

const ShowcaseDescription: React.FC<ShowcaseDescriptionProps> = ({optionalClasses, tags, description, title }) => {
  return (
    <AnimatePresence>
      <div className={'flex flex-col' + ' ' + optionalClasses}>
        <h3 className='text-xl font-medium my-2'>{title}</h3>
        <div className="flex">
          {
            tags.map((tag, idx) => (
              <div key={idx} className={"text-gray-500 text-xs uppercase " + (idx === 0 ? '' : 'ml-4')}>
                {tag}
              </div>
            ))
          }
        </div>
        <div className='mt-5'>
          {description}
        </div>
      </div>
    </AnimatePresence>
  )
};

export default ShowcaseDescription;