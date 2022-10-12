import type React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const scrollToPortfolio = () => {
	window.scrollTo({
		top: 1800,
		behavior: 'smooth',
	},);
}

const LandingCTA : React.FC<any> = () => {	

  return  (
		<div className="overflow-hidden">
			<AnimatePresence>
				<section className="w-100 flex items-center justify-between" style={{ 'minHeight': '83vh' }}>
					<div className="flex-1 flex flex-col justify-center items-center">
						<motion.h1 
							className="md:text-8xl sm:text-6xl font-semibold text-center tracking-wide leading-none"
							animate={{
								opacity: 1,
							}}
							initial={{
								opacity: 0,
							}}
							transition={{
								duration: 0.5,
							}}
						>
							Hi I'm Francis 
							<br />
							James Tolentino
						</motion.h1>
						<motion.h2
							className="text-base my-9 font-normal tracking-wider text-center"
							animate={{
								opacity: 1,
							}}
							initial={{
								opacity: 0,
							}}
							transition={{
								duration: 0.5,
								bounce: true,
							}}
						>
							A 🧑🏻‍💻 Fullstack and 📲 Flutter Developer creating web and mobile <br /> apps for small to medium sized businesses
						</motion.h2>
						<div className="flex  md:flex-row sm:flex-col-reverse w-100 items-center justify-center mt-8">
							<motion.button 
								onClick={scrollToPortfolio}
								className="px-8 rounded-lg transition-all text-indigo-700 py-2 text-sm sm:mt-4 md:mt-0"
								animate={{
									x:0,
									opacity:1,
								}}
								initial={{
									x: 200,
									opacity: 0,
								}}
								transition={{
									duration: 0.4,
									delay: 0.3,
								}}
							>
								See Portfolio
							</motion.button>
							<motion.a 
								href="mailto: francistolentino1107@gmail.com"
								animate={{
									x:0,
									opacity:1,
								}}
								initial={{
									x: -200,
									opacity: 0,
								}}
								transition={{
									duration: 0.4,
									delay: 0.5,
								}}
							>
								<button className="bg-indigo-700 border border-indigo-700 hover:bg-indigo-900 transition-all text-white px-8 
								text-sm rounded-md py-2 ml-3">Let's work together</button>
							</motion.a>
						</div>
					</div>
				</section>
				<motion.div
					initial={{
						y:-200,
						x:100,
						opacity:0,
						skew: -20,
					}}
					animate={{
						y:0,
						x:0,
						opacity: 1,
						skew: -20,
					}}
					transition={{
						duration: 0.2,
					}}
					className='bg-indigo-200 absolute top-0'
					style={{
						width:'500px',
						height: '500px',
						zIndex:'-1',
						transform: 'skew(-20deg)'
					}}
					></motion.div>
				<motion.div
					initial={{
						y:200,
						x:-100,
						opacity:0,
						skew: -20,
					}}
					animate={{
						y:0,
						x:0,
						opacity: 1,
						skew: -20,
					}}
					transition={{
						duration: 0.2,
						delay: 0.1,
					}}
					className='bg-gradient-to-b from-indigo-100 absolute top-40 left-10'
					style={{
						width:'400px',
						height: '400px',
						zIndex:'-1',
						transform: 'skew(-20deg)'
					}}
					></motion.div>
				<motion.div
					initial={{
						y:200,
						x:-100,
						opacity:0,
						skew: -20,
					}}
					animate={{
						y:0,
						x:0,
						opacity: 1,
						skew: -20,
					}}
					transition={{
						duration: 0.2,
					}}
					className='bg-gradient-to-b from-indigo-400 t-rounded-3xl absolute top-24 right-24'
					style={{
						width:'600px',
						height: '600px',
						zIndex:'-1',
						transform: 'skew(-20deg)'
					}}
					></motion.div>
			</AnimatePresence>
		</div>
  )
}

export default LandingCTA;