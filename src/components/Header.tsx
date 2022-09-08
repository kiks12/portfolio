
import type React from 'react';
import Container from './Container';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {

  return (
    <header className="h-24 flex items-center z-20 sticky top-0 left-0 right-0">
		<nav className="w-100 flex-1">
			<Container>
				<div className="flex justify-between">
					<div className="flex items-center">
						<h2>
							<span className="font-black text-gradient">
								Icon
							</span>
						</h2>
						<ul className="flex mx-10 items-center">
							<li className="mx-5 cursor-pointer hover:text-indigo-700">Portfolio</li>
							<li className="mx-5 cursor-pointer hover:text-indigo-700">About</li>
						</ul>
					</div>
					<ul className="flex">
						<a href="https://github.com/kiks12">
							<div className="mx-1 transition-all rounded-full shadow p-2 w-11 h-11 bg-white flex justify-center items-center cursor-pointer hover:shadow-lg">
								<i className='w-100'>
									<span><img src="/icons8-github-30.svg"/></span>
								</i>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/francis-tolentino-08a428247">
							<div className="mx-1 transition-all rounded-full shadow p-2 w-11 h-11 bg-white flex justify-center items-center cursor-pointer hover:shadow-lg">
								<i className='w-100'>
									<span><img src="/icons8-linkedin-2-30.svg"/></span>
								</i>
							</div>
						</a>
						<a href="https://twitter.com/francisjames12_">
							<div className="mx-1 transition-all rounded-full shadow p-2 w-11 h-11 bg-white flex justify-center items-center cursor-pointer hover:shadow-lg">
								<i className='w-100'>
									<span><img src="/icons8-twitter-30.svg" /></span>
								</i>
							</div>
						</a>
					</ul>
				</div>
			</Container>
		</nav>
	</header> 
  );
}

export default Header;