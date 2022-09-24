import type React from 'react';
import { useEffect } from 'react';

const LandingCTA : React.FC<any> = () => {

	const seePortfolio = () => {
		console.log(navigator.userAgent);
		window.scrollTo({
			top: 1600,
			behavior: 'smooth',
		},);
	}

  return  (
    <section className="w-100 flex items-center justify-between" style={{ 'minHeight': '83vh' }}>
			<div className="flex-1 flex flex-col justify-center items-center">
				<h1 className="md:text-8xl sm:text-6xl font-semibold text-center tracking-wide leading-none">
					Hi I'm Francis 
					<br />
					James Tolentino
				</h1>
				<h2 className="text-base my-9 font-normal tracking-wider text-center">
					A 🧑🏻‍💻 Fullstack and 📲 Flutter Developer creating web and mobile <br /> apps for small to medium sized businesses
				</h2>
				<div className="flex  md:flex-row sm:flex-col-reverse w-100 items-center justify-center mt-8">
					<button 
						onClick={seePortfolio}
						className="px-8 rounded-lg transition-all text-indigo-700 py-2 text-sm sm:mt-4 md:mt-0"
					>
						See Portfolio
					</button>
          <a href="mailto: francistolentino1107@gmail.com">
            <button className="bg-indigo-700 border border-indigo-700 hover:bg-indigo-900 transition-all text-white px-8 
            text-sm rounded-md py-2 ml-3">Let's work together</button>
          </a>
				</div>
			</div>
		</section>
  )
}

export default LandingCTA;