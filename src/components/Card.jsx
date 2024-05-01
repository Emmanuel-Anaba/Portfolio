/* eslint-disable react/prop-types */
const Card = ({ className, children }) => {
  return <div className={`overflow-hidden ${className}`}>{children}</div>;
};

export default Card;
