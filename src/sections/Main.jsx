/* eslint-disable react/prop-types */
const Main = ({ children, className }) => {
  return (
    <main
      className={`border-4 border-t-0 border-l-4 lg:border-l-0 w-full lg:w-[calc(100%-13rem)] ${className}`}>
      {children}
    </main>
  );
};

export default Main;
