import type React from 'react';

const Profile: React.FC<any> = () => {
  return (
    <div className='h-screen relative'>
      <div className="rounded-full float-left h-64 w-64 bg-transparent overflow-hidden flex justify-center items-center relative" style={{'shapeOutside': 'circle()'}}>
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
      </div>
    </div>
  );
}

export default Profile;