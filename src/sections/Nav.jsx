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
      <ul className="flex items-center justify-evenly md:w-5/6 lg:w-1/2 w-full h-full m-auto">
        {icons.map(({ icon, content }, i) => (
          <li key={i} className="nav-icon">
            <a href={`#${content.toLowerCase()}`}>{icon}</a>
            <span className="hidden md:block">{content}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
