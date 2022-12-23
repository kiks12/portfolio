
import type React from 'react';
import Container from './Container';
import { scrollToPortfolio } from '../components/LandingCTA';
import { AnimatePresence, motion } from 'framer-motion';

interface HeaderProps {
}

export const scrollToAbout = () => {
	window.scrollTo({
		top: 6500,
		behavior: 'smooth',
	},);
}

const Header: React.FC<HeaderProps> = () => {

  return (
		<AnimatePresence>
			<header className="h-24 flex items-center z-20 ">
				<nav className="w-100 flex-1">
					<Container>
						<div className="flex justify-between">
							<div className="flex items-center">
								<motion.h2
									animate={{
										x: 0,
										opacity: 1,
									}}
									initial={{
										x: -200,
										opacity: 0,
									}}
									transition={{
										bounce: true,
										duration: 0.4,
										delay: 1.4,
									}}
								>
									<span className="font-black text-gradient">
										Icon
									</span>
								</motion.h2>
								<ul className="flex mx-10 md:flex sm:hidden items-center">
									<motion.li 
										animate={{
											x: 0,
											opacity: 1,
										}}
										initial={{
											x: -200,
											opacity: 0,
										}}
										transition={{
											bounce: true,
											duration: 0.4,
											delay: 1.3,
										}}
										className="mx-5 cursor-pointer hover:text-indigo-700" 
										onClick={scrollToPortfolio}
									>
										Portfolio
									</motion.li>
									<motion.li
										className="mx-5 cursor-pointer hover:text-indigo-700"
										animate={{
											x: 0,
											opacity: 1,
										}}
										initial={{
											x: -200,
											opacity: 0,
										}}
										transition={{
											bounce: true,
											duration: 0.4,
											delay: 1.2,
										}}
										onClick={scrollToAbout}
									>
										About
									</motion.li>
								</ul>
							</div>
							<ul className="flex">
								<motion.a 
									animate={{
										x: 0,
										opacity: 1,
									}}
									initial={{
										x: 200,
										opacity: 0,
									}}
									transition={{
										bounce: true,
										duration: 0.4,
										delay: 1.2,
									}}	
									href="https://github.com/kiks12"
								>
									<div className="mx-1 transition-all rounded-full shadow p-2 w-11 h-11 bg-white flex justify-center items-center cursor-pointer hover:shadow-lg">
										<i className='w-100'>
											<span><img src="/icons8-github-30.svg"/></span>
										</i>
									</div>
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/francis-tolentino-08a428247"
									animate={{
										x: 0,
										opacity: 1,
									}}
									initial={{
										x: 200,
										opacity: 0,
									}}
									transition={{
										bounce: true,
										duration: 0.4,
										delay: 1.3,
									}}	
								>
									<div className="mx-1 transition-all rounded-full shadow p-2 w-11 h-11 bg-white flex justify-center items-center cursor-pointer hover:shadow-lg">
										<i className='w-100'>
											<span><img src="/icons8-linkedin-2-30.svg"/></span>
										</i>
									</div>
								</motion.a>
								<motion.a
									href="https://twitter.com/francisjames12_"
									animate={{
										x: 0,
										opacity: 1,
									}}
									initial={{
										x: 200,
										opacity: 0,
									}}
									transition={{
										bounce: true,
										duration: 0.4,
										delay: 1.4,
									}}	
								>
									<div className="mx-1 transition-all rounded-full shadow p-2 w-11 h-11 bg-white flex justify-center items-center cursor-pointer hover:shadow-lg">
										<i className='w-100'>
											<span><img src="/icons8-twitter-30.svg" /></span>
										</i>
									</div>
								</motion.a>
							</ul>
						</div>
					</Container>
				</nav>
			</header> 
		</AnimatePresence>
  );
}

export default Header;