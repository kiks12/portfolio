
import type React from "react";

interface ContainerProps {
  children?: JSX.Element | JSX.Element[];
}

const Container : React.FC<ContainerProps> = (props) => {
  return (
    <div className="md:w-9/12 sm:w-auto md:mx-auto mx-5">
      {props.children}
    </div>
  )
}


export default Container;