
import type React from "react";

interface ContainerProps {
  optionalClasses?: string;
  children?: JSX.Element | JSX.Element[];
}

const Container : React.FC<ContainerProps> = (props) => {
  return (
    <div className="md:w-3/5 sm:w-auto md:mx-auto mx-5" style={{
      "width": "min(80%, 63em)",
      "zIndex": "-1"
    }}>
      {props.children}
    </div>
  )
}


export default Container;