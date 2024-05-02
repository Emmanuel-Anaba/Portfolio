/* eslint-disable react/prop-types */
const Card = ({ className, children }) => {
  return <div className={`overflow-hidden bg-blue-700 rounded-lg ${className}`}>{children}</div>;
};

export default Card;
