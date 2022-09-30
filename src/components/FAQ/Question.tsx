import { AnimatePresence, motion, } from 'framer-motion';
import type React from 'react';

interface QuestionProps {
  id: number;
  question: string;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const Question: React.FC<QuestionProps> = ({ question, active, id, setActive }) => {

  const containerOnClick = () => {
    setActive(prev => prev === id ? 0 : id);
  }

  return (
    <div 
      className="cursor-pointer p-4 border rounded mt-3"
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
            className="min-h-max text-xs mt-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem eleifend, feugiat nunc et, feugiat neque. Cras molestie turpis vel metus ornare laoreet. Curabitur accumsan porttitor ex, id malesuada arcu faucibus ullamcorper. Aenean et augue ac ligula fermentum pharetra. Vivamus placerat dui leo, ut dictum massa volutpat in. In viverra lacus pretium lorem facilisis, eget vehicula quam rhoncus. Sed venenatis urna et neque vehicula tristique.
          </motion.div>
        </AnimatePresence>
      }
    </div>
  )
}

export default Question;