/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { FaFileAlt, FaHome } from "react-icons/fa";
import { FaBookOpen, FaBriefcase, FaEnvelope, FaList } from "react-icons/fa6";

const Nav = () => {
  const icons = [
    {
      icon: <FaHome />,
      content: "Home",
    },
    {
      icon: <FaList />,
      content: "Services",
    },
    {
      icon: <FaBookOpen />,
      content: "Education",
    },
    {
      icon: <FaBriefcase />,
      content: "Experience",
    },
    {
      icon: <FaFileAlt />,
      content: "Portfolio",
    },
    {
      icon: <FaEnvelope />,
      content: "Contact",
    },
  ];

  return (
    <nav className="bg-blue-700 border-4 h-14 sticky top-0 w-full before:-left-1 after:-right-1">
      <ul className="flex h-[90%] items-end justify-evenly m-auto md:w-5/6 lg:w-1/2">
        {icons.map(({ icon, content }, i) => (
          <li key={i} className="nav-icon">
            <span className="absolute text-white rounded-full text-xs duration-700 top-0 -translate-y-3/4 md:translate-y-0 md:opacity-0 cursor-default">
              {content}
            </span>
            <a href={`#${content.toLowerCase()}`}>{icon}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
