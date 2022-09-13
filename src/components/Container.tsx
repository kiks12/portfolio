
import type React from "react";

interface ContainerProps {
  optionalClasses?: string;
  children?: JSX.Element | JSX.Element[];
}

const Container : React.FC<ContainerProps> = (props) => {
  return (
    <div className="mx-auto" style={{
      "width": "min(90%, 63em)",
      "zIndex": "-1"
    }}>
      {props.children}
    </div>
  )
}


export default Container;