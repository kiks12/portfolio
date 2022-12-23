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
            question="What technologies are you proficient at?"
            answer="Common Javascript/Typescript Technologies like, Node JS, Express JS, React JS, and Vue JS. Also meta-frameworks such as Next JS, and Astro."
            active={active}
            setActive={setActive}
          />
          <Question 
            id={2} 
            question="How many years have you been using these technologies?"
            answer="Simple answer is 3 years. I have been using these technologies for my own personal projects. However, professionally, I have only been using it for 9 months."
            active={active}
            setActive={setActive}
          />
          <Question 
            id={3} 
            question="Aside from Web Applications, what else can you create?"
            answer="Simple Desktop Applications using Python and/or Cross Platform Desktop Applications with Electron."
            active={active}
            setActive={setActive}
          />
          <Question 
            id={4} 
            question="What is the usual duration of each project?"
            answer="Depending on its complexity, it usually ranges from 3 months to 1 year."
            active={active}
            setActive={setActive}
          />
          <Question 
            id={5} 
            question="What is the starting price of a project?"
            answer="Every project starts at PHP 7,000. However it might increase depending on the complexity of the project."
            active={active}
            setActive={setActive}
          />
        </div>
      </Container>
    </div>
  )
}

export default FAQ;
