import type React from 'react';

const LandingCTA : React.FC<any> = () => {
  return  (
    <section className="w-100 flex h-screen items-center justify-between">
			<div className="flex-1 flex flex-col justify-center items-center">
				<h1 className="text-8xl font-semibold text-center tracking-wide leading-none">
					Hi I'm Francis 
					<br />
					James Tolentino
				</h1>
				<h2 className="text-base my-9 font-normal tracking-wider text-center">
					A 🧑🏻‍💻 Fullstack and 📲 Flutter Developer creating web and mobile <br /> apps for small to medium sized businesses
				</h2>
				<div className="flex flex-row w-100 items-center justify-center mt-8">
					<button className="px-8 rounded-lg transition-all text-indigo-700
					hover:bg-indigo-700 hover:text-white py-2 text-sm">See Portfolio</button>
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