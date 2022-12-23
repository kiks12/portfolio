import { AnimatePresence, motion, } from 'framer-motion';
import type React from 'react';

interface QuestionProps {
  id: number;
  question: string;
  answer: string;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const ACTIVE_CLASS = 'cursor-pointer p-4 rounded mt-3 hover:shadow shadow'
const INACTIVE_CLASS = 'cursor-pointer p-4 rounded mt-3 hover:shadow'

const Question: React.FC<QuestionProps> = ({ question, answer, active, id, setActive }) => {

  const containerOnClick = () => {
    setActive(prev => prev === id ? 0 : id);
  }

  return (
    <div 
      className={active === id ? ACTIVE_CLASS : INACTIVE_CLASS}
      onClick={containerOnClick}
    >
      <h3 className="text-2xl font-medium">
        {question}
      </h3>
      { active === id && 
        <AnimatePresence>
          <motion.div 
            initial={{
              y:-50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y:-100,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="min-h-max text-xs mt-6 mb-3 leading-5"
          >
            {answer}
          </motion.div>
        </AnimatePresence>
      }
    </div>
  )
}

export default Question;