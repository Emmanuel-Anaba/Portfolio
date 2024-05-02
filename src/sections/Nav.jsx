/* eslint-disable react/jsx-key */
import { FaHome } from "react-icons/fa";
import {
  FaBookOpen,
  FaBriefcase,
  FaEnvelope,
  FaList,
  FaListCheck,
} from "react-icons/fa6";

const Nav = () => {
  const icons = [
    {
      icon: <FaHome />,
      link: "#",
    },
    {
      icon: <FaList />,
      link: "#",
    },
    {
      icon: <FaBookOpen />,
      link: "#",
    },
    {
      icon: <FaBriefcase />,
      link: "#",
    },
    {
      icon: <FaListCheck />,
      link: "#",
    },
    {
      icon: <FaEnvelope />,
      link: "#",
    },
  ];

  return (
    <nav className="bg-blue-700 border-4 h-14 sticky top-0 w-full">
      <ul className="flex h-full items-center justify-evenly m-auto w-1/2">
        {icons.map(({ icon, link }, i) => (
          <li key={i} className="active">
            <a href={link}>{icon}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
