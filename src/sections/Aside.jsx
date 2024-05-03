import me from "../assets/img/me-sm.png";
import { IoCloudDownloadOutline } from "react-icons/io5";
import ProgressBar from "../components/ProgressBar";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const Aside = () => {
  const skills = [
    {
      skill: "HTML",
      percentage: 90,
    },
    {
      skill: "CSS",
      percentage: 75,
    },
    {
      skill: "Bootstrap",
      percentage: 85,
    },
    {
      skill: "Tailwind",
      percentage: 90,
    },
    {
      skill: "JavaScript",
      percentage: 70,
    },
    {
      skill: "React",
      percentage: 30,
    },
    {
      skill: "TypeScript",
      percentage: 20,
    },
  ];

  const info = [
    {
      h: "Email",
      p: "emmaanaba@gmail.com",
    },
    {
      h: "Phone",
      p: "+234 803 5706 972",
    },
    {
      h: "Residence",
      p: "Nigeria",
    },
    {
      h: "City",
      p: "Lagos",
    },
    {
      h: "Age",
      p: "17 Years",
    },
    {
      h: "Freelance",
      p: "Available",
    },
    {
      h: "Language",
      p: "English",
    },
  ];

  const links = [
    {
      icon: <FaFacebookF />,
      link: "https://nothing-here",
    },
    {
      icon: <FaWhatsapp />,
      link: "",
    },
    {
      icon: <FaXTwitter />,
      link: "",
    },
    {
      icon: <FaLinkedinIn />,
      link: "",
    },
    {
      icon: <FaGithub />,
      link: "",
    },
  ];

  return (
    <aside className="hidden bg-blue-700 sticky top-14 h-[calc(100svh-3.5rem)] border-4 border-t-0 w-52 lg:grid content-between p-4">
      <div className="grid place-items-center cursor-default">
        <div className="meImg relative">
          <img className="rounded-full h-20 border-2" src={me} alt="me" />
        </div>
        <p className="font-medium">Emmanuel Anaba</p>
        <span className="badge">FrontEnd Developer</span>
        <div className="text-sm flex flex-wrap justify-evenly mt-2 w-full">
          {links.map(({ icon, link }, i) => (
            <a key={i} href={link}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <ul className="text-xs grid gap-1">
        {info.map(({ h, p }) => (
          <li key={h}>
            {h} <i className="float-right">{p}</i>
          </li>
        ))}
      </ul>
      <div className="text-xs">
        <p className="text-base font-medium mb-1">Skills</p>
        <ul className="grid gap-1">
          {skills.map(({ skill, percentage }) => (
            <li key={skill}>
              <p className="pb-1">
                {skill}
                <span className="float-right">
                  {percentage}% {percentage >= 70 ? "😎" : "😏"}
                </span>
              </p>
              <ProgressBar width={percentage} />
            </li>
          ))}
        </ul>
      </div>
      <a
        href="path/to/your/file.pdf"
        download="Emmanuel-Anaba-CV.pdf"
        className="btn-outline">
        Download My CV <IoCloudDownloadOutline className="inline text-base" />
      </a>
    </aside>
  );
};

export default Aside;
