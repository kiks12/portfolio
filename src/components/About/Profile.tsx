import { AnimatePresence, motion } from 'framer-motion';
import type React from 'react';

const Profile: React.FC<any> = () => {
  return (
    <AnimatePresence>
      <div className='h-screen relative flex'>
        <div className="lg:mr-10 sm:mr-0 lg:w-3/4 md:w-full sm:w-full">
          <div className="flex flex-col overflow-wrap">
            <motion.h3
              className="text-2xl font-medium"
              initial={{
                y:200,
                opacity:0,
              }}
              animate={{
                y:0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              Personal Information
            </motion.h3>
            <motion.div 
              className="text-justify text-xs mt-3"
              initial={{
                y:200,
                opacity:0,
              }}
              animate={{
                y:0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
            >
              Hi! I am Francis James Tolentino, currently a 19 year old sophomore in Don Honorio Ventura State University taking Bachelor of Science in Computer Engineering.
              Currently living in Angeles City, Pampanga, Philippines. 
            </motion.div>
          </div>
          <div className="flex flex-col mt-12 overflow-wrap">
            <motion.h3
              className="text-2xl font-medium"
              initial={{
                y:200,
                opacity:0,
              }}
              animate={{
                y:0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.4,
              }}
            >
              My Story
            </motion.h3>
            <motion.div 
              className="text-justify text-xs mt-3"
              initial={{
                y:200,
                opacity:0,
              }}
              animate={{
                y:0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.6,
              }}
            >
              I started coding when I was in first year highschool and I have been programming since. However, when the pandemic started, I eventually had the eagerness to further enhance my skills as a Programmer, UI/UX Designer, and Product Designer. Since then, I pledged myself to use my skills and talent to create systems and products that will create a change in the society, for the betterment of - not only myself, but of the majority. 
            </motion.div>
          </div>

          <div className="flex md:flex-row sm:flex-col md:mt-14 sm:mt-10">
            <div className="md:w-1/2 sm:w-full md:mr-4 sm:mr-0">
            <motion.h3
              className="text-2xl font-medium"
              initial={{
                y:200,
                opacity:0,
              }}
              animate={{
                y:0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.8,
              }}
            >
              Skills 
            </motion.h3>
              <ul className='flex flex-wrap mt-2'>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1,
                  }}
                >
                  Python
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.1,
                  }}
                >
                  Typescript
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.2,
                  }}
                >
                  Node JS
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.3,
                  }}
                >
                  UI/UX Design
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.4,
                  }}
                >
                  Figma Prototyping
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.5,
                  }}
                >
                  React JS
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.6,
                  }}
                >
                  System Design
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.7,
                  }}
                >
                  Data Analytics
                </motion.li>
              </ul>
            </div>

            <div className="md:w-1/2 sm:w-full md:mt-0 sm:mt-10">
              <motion.h3
                className="text-2xl font-medium"
                initial={{
                  y:200,
                  opacity:0,
                }}
                animate={{
                  y:0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                }}
              >
                Hobbies 
              </motion.h3>
              <ul className='flex flex-wrap mt-2'>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1,
                  }}
                >
                  Ball Games
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.1,
                  }}
                >
                  Chess 
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.2,
                  }}
                >
                  Reading Books
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.3,
                  }}
                >
                  Playing Piano
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.4,
                  }}
                >
                  Watching Informative Videos
                </motion.li>
                <motion.li
                  className='px-8 py-2 text-xs mt-2 rounded-full bg-indigo-100 mr-2'
                  initial={{
                    x:-100,
                    opacity: 0,
                  }}
                  animate={{
                    x:0, 
                    opacity: 1
                  }}
                  transition={{
                    delay: 1.5,
                  }}
                >
                  CAD Drafting
                </motion.li>
              </ul>
            </div>
          </div>

        </div>
        <motion.div
          className="lg:block sm:hidden h-96 w-2/5"
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <img src="/About/prof.jpg" alt="" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Profile;