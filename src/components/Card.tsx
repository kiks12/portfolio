import type React from 'react';

interface CardProps {
  optionalClasses?: string;
  children?: any;
}

const Card: React.FC<CardProps> = ({ children, optionalClasses }) => {
  return (
    <div className={"shadow-lg bg-white " + optionalClasses}>
      {children}
    </div>
  );
}


export default Card;