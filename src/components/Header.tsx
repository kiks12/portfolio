
import type React from 'react';
import Container from './Container';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {

  return (
    <header className="h-24 flex items-center z-20">
		<nav className="w-100 flex-1">
			<Container>
				<div className="flex justify-between">
					<div className="flex items-center">
						<h2>
							<span className="font-black text-gradient">
								Icon
							</span>
						</h2>
						<ul className="flex mx-5 items-center">
							<li className="mx-2 cursor-pointer hover:text-slate-500">Portfolio</li>
							<li className="mx-2 cursor-pointer hover:text-slate-500">About</li>
						</ul>
					</div>
					<ul className="flex">
						<a href="https://github.com/kiks12">
							<div className="mx-1 transition-all rounded-full shadow p-2 w-12 h-12 flex justify-center items-center cursor-pointer hover:shadow-lg">
								<i className='w-100'>
									<span><img src="/icons8-github-30.svg"/></span>
								</i>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/francis-tolentino-08a428247">
							<div className="mx-1 transition-all rounded-full shadow p-2 w-12 h-12 flex justify-center items-center cursor-pointer hover:shadow-lg">
								<i className='w-100'>
									<span><img src="/icons8-linkedin-2-30.svg"/></span>
								</i>
							</div>
						</a>
						<a href="https://twitter.com/francisjames12_">
							<div className="mx-1 transition-all rounded-full shadow p-2 w-12 h-12 flex justify-center items-center cursor-pointer hover:shadow-lg">
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