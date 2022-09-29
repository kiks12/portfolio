import type React from 'react';

const Achievements: React.FC<any> = () => {
  return (
    <div>
      <h3 className='text-2xl font-medium'>Achievements and Awards</h3>
      <div className="flex mt-12">
        <div className="w-1/2 mr-4">
          <h3 className='text-3xl font-medium'>3rd Place 🥉</h3>
          <p className='text-xs mt-2'>
            in Web Designing, Division Level, Representing Claro M. Recto Information and Communication Technology High School (s.y. 2017-2018)
          </p>
        </div>
        <div className="w-1/2">
          <h3 className='text-3xl font-medium'>2nd Runner Up 🥉</h3>
          <p className="text-xs mt-2">
            in Web Development Challenge, Inter-Course Level, Representing Bachelor of Science in Computer Engineering against the whole College of Computing Studies (s.y. 2021-2022)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Achievements;