import type React from 'react';
import { useState } from 'react';
import Question from './Question';

const FAQ: React.FC<any> = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className='my-32'>
      <h4 className='text-xs font-medium mb-10'>FAQs</h4>
      <div className='flex flex-col'>
        <Question 
          id={1} 
          question="Question?"
          active={active}
          setActive={setActive}
        />
        <Question 
          id={2} 
          question="Question?"
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  )
}

export default FAQ;
