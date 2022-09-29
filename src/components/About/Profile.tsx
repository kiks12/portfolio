import type React from 'react';

const Profile: React.FC<any> = () => {
  return (
    <div className='h-screen relative flex'>
      <div className="mr-10 w-3/4">
        <div className="flex flex-col overflow-wrap">
          <h3 className="text-2xl font-medium">Personal Information</h3>
          <div className="text-justify text-xs mt-3">
            Hi! I am Francis James Tolentino, currently a 19 year old sophomore in Don Honorio Ventura State University taking Bachelor of Science in Computer Engineering.
            Currently living in Angeles City, Pampanga, Philippines. 
          </div>
        </div>
        <div className="flex flex-col mt-12 overflow-wrap">
          <h3 className="text-2xl font-medium">My Story</h3>
          <div className="text-justify text-xs mt-3">
            I started coding when I was in first year highschool and I have been programming since. However, when the pandemic started, I eventually had the eagerness to further enhance my skills as a Programmer, UI/UX Designer, and Product Designer. Since then, I pledged myself to use my skills and talent to create systems and products that will create a change in the society, for the betterment of - not only myself, but of the majority. 
          </div>
        </div>

        <div className="flex mt-14">
          <div className="w-1/2 mr-4">
            <h3 className="text-2xl font-medium">Skills</h3>
            <ul className='flex flex-wrap mt-2'>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2'>Python</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2'>Typescript</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>Node JS</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>UI/UX Design</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>Figma Prototyping</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>React JS</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>System Design</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>Data Analytics</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-medium">Hobbies</h3>
            <ul className='flex flex-wrap mt-2'>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2'>Basketball</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2'>Volleyball</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>Reading Books</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>Piano</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>CAD Drafting</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>Math Problems</li>
              <li className='px-8 py-2 text-xs rounded-full bg-indigo-100 mr-2 mt-2'>Watching Informative Videos</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="h-96 w-2/5">
        <img src="/About/prof.jpg" alt="" />
      </div>
      {/* <div className="rounded-full float-left h-64 w-64 bg-transparent overflow-hidden flex justify-center items-center relative" style={{'shapeOutside': 'circle()'}}>
        <div className="rounded-full float-left h-48 w-48 bg-gray-300 overflow-hidden flex justify-center items-center relative">
          <img src="/About/prof.jpg" className='' alt="" />
        </div>
      </div>
      <div className="text-justify text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec interdum erat. Aliquam ut turpis vel risus iaculis rutrum. Maecenas malesuada, nisi vitae commodo vulputate, urna mi congue sapien, vitae blandit diam augue eu purus. Nunc in orci justo. Cras eu nibh a nisi congue vulputate. Proin ut luctus lorem. Phasellus arcu augue, tincidunt nec tincidunt et, efficitur eu mi. <br /> <br />

        Praesent et ultrices tellus, sed scelerisque magna. Nullam ultricies venenatis mauris, id gravida ex imperdiet vitae. Etiam blandit sed mauris ac vehicula. Duis varius dolor sit amet lorem condimentum condimentum. Quisque massa odio, volutpat sed odio quis, semper posuere tellus. Sed at rhoncus est. Nulla id sem eget ipsum tempor varius at eu nisl. Phasellus vitae lorem accumsan, ultricies risus eget, ullamcorper enim. Nulla scelerisque odio ex, sed consequat arcu sodales in.

        <br/> <br/>

        Duis vestibulum dolor arcu. Aenean bibendum vitae diam sed dapibus. Mauris eget magna eu ipsum aliquet molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque viverra sodales massa, venenatis vestibulum magna lobortis eget. Donec finibus blandit facilisis. Quisque gravida elit vel purus tristique, ut commodo libero rutrum. Sed egestas ultricies sapien, sit amet fermentum quam tristique tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tristique porttitor magna.

        Ut a condimentum neque, ut laoreet lorem. Sed molestie nisi in euismod vestibulum. Aliquam laoreet vel elit ut euismod. Etiam id libero nulla. Fusce eu faucibus tellus, quis convallis libero. Nam pharetra interdum quam, id bibendum lorem vestibulum quis. Mauris non fringilla ante. Nam id orci dui. Vestibulum lacinia tellus vitae consectetur venenatis. Fusce sed turpis risus. Ut fringilla, libero in egestas finibus, orci arcu bibendum magna, a pulvinar neque purus vitae massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus fermentum nunc sit amet nulla tempor, id imperdiet ex laoreet.
      </div> */}
    </div>
  );
}

export default Profile;