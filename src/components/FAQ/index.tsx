import type React from 'react';
import { useState } from 'react';
import Question from './Question';
import Container from '../Container';

const FAQ: React.FC<any> = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className='my-32 py-10'>
      <Container>
        <h4 className='text-xs font-medium my-10'>FAQs</h4>
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
          <Question 
            id={3} 
            question="Question?"
            active={active}
            setActive={setActive}
          />
          <Question 
            id={4} 
            question="Question?"
            active={active}
            setActive={setActive}
          />
          <Question 
            id={5} 
            question="Question?"
            active={active}
            setActive={setActive}
          />
        </div>
      </Container>
    </div>
  )
}

export default FAQ;
