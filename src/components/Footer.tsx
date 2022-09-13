import type React from 'react';
import Container from './Container';

const Footer: React.FC<any> = () => {
  return (
    <footer className='h-96 border border-l-0 border-r-0 mt-10 border-b-0 bg-gray-100 border-gray-300 p-5'>
      <Container>
        <div className="flex md:flex-row sm:flex-col justify-between">
          <div className="flex-1 mr-24">
            <h4 className='text-xs font-medium mb-10 tracking-wider'>CONTACT US</h4>
            <p className="text-xs my-3">Write me a message, I'll be happy to be meet you.</p>
            <a href="mailto:francistolentino1107@gmail.com">
              <div className="p-2 border bg-white rounded-full flex items-center cursor-pointer">
                <div className="flex justify-center items-center rounded-full h-10 w-10 overflow-hidden">
                  <img src="/About/prof.jpg" alt="" />
                </div>
                <h4 className='text-xs mx-3 text-gray-600'>
                  Send me a message! 
                  <i className="fa-regular fa-arrow-right"></i>
                </h4>
              </div>
            </a>
            <p className="text-xs mt-10 mb-1">🇵🇭 Angeles City, Pampanga, Philippines</p>
            <p className="text-xs my-1">+63 948 279 1258</p>
            <p className="text-xs my-1">francistolentino1107@gmail.com</p>
          </div>
          <div className="flex justify-between flex-1 sm:mt-10">
            <div className="">
              <h4 className='text-xs font-medium mb-10 tracking-wider'>SERVICES</h4>
              <ul>
                <li className='text-xs my-3'>UI Design</li>
                <li className='text-xs my-3'>UX Design</li>
                <li className='text-xs my-3'>Data Analytics</li>
                <li className='text-xs my-3'>Frontend Development</li>
                <li className='text-xs my-3'>Backend Development</li>
                <li className='text-xs my-3'>Mobile Development</li>
                <li className='text-xs my-3'>Systems Designs</li>
              </ul>
            </div>
            <div className="">
              <h4 className='text-xs font-medium mb-10 tracking-wider'>TECHNOLOGIES</h4>
              <ul>
                <li className='text-xs my-3'>Node</li>
                <li className='text-xs my-3'>Express</li>
                <li className='text-xs my-3'>React</li>
                <li className='text-xs my-3'>Vue</li>
                <li className='text-xs my-3'>Flutter</li>
                <li className='text-xs my-3'>Tailwind CSS</li>
                <li className='text-xs my-3'>HTML5</li>
                <li className='text-xs my-3'>CSS3</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;