import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aside from "./sections/Aside";
import Main from "./sections/Main";
import Nav from "./sections/Nav";
import Section from "./components/Section";
import Card from "./components/Card";
import me from "./assets/img/me-lg.png";
import { FaCode, FaPalette } from "react-icons/fa6";
import { FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const App = () => {
  const [text] = useTypewriter({
    words: ["Front End Developer", "Pianist", "Doctor"],
    loop: Infinity,
  });

  const services = {
    hp: "My Services",
    hs: "I provide personalized services that transcend the conventional, guaranteeing a distinctive and influential presence in the digital sphere",
    cards: [
      {
        icon: <FaCode />,
        h: "Web Development",
        list: ["FrontEnd", "BackEnd", "CMS"],
      },
      {
        icon: <FaMobileAlt />,
        h: "App Development",
        list: [
          "Android Development",
          "iOS Development",
          "Cross-Platform Development",
        ],
      },
      {
        icon: <FaPalette />,
        h: "UI/UX Design",
        list: [
          "Information Architecture",
          "Visual Design",
          "Accessibilty Design",
        ],
      },
      {
        icon: <FaPaintBrush />,
        h: "Graphics Design",
        list: ["Web and Digital Design", "Logo Design", "CMS"],
      },
    ],
  };

  const education = {
    hp: "Education",
    card: [
      {
        school: "University Of Ibadan",
        duration: "2024 - present",
        degree: "Bachelor of Medicine and Surgery (MBBS)",
        achievements: ["Volunteer, Community Health Clinic 😏"],
      },
    ],
  };

  return (
    <>
      <Nav />
      <Aside />
      <Main>
        <header className="bg-blue-700 w-full h-[85svh] rounded-lg grid md:grid-cols-2 items-center lg:justify-between px-4 gap-4">
          <div className="grid gap-4">
            <p className="text-5xl font-medium">Hi! 👋 I&apos;m Emmanuel</p>
            <p className="text-4xl">
              A {text}
              <Cursor />
            </p>
          </div>
          <img className="h-full" src={me} alt="me" />
        </header>
        <Section id="services">
          <div className="section-heading">
            <p className="section-heading-primary">{services.hp}</p>
            <p className="section-heading-secondary">{services.hs}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-1">
            {services.cards.map(({ icon, h, list }) => (
              <Card
                key={h}
                className="bg-blue-700 rounded-lg p-4 grid gap-2 content-evenly">
                <span className="icon">
                  {icon}
                </span>
                <p className="text-xl font-medium">{h}</p>
                <ul>
                  {list.map((item) => (
                    <li key={item}>&rarr; {item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="education">
          <div className="section-heading">
            <p className="section-heading-primary">{education.hp}</p>
          </div>
          <Card className="bg-blue-700 rounded-md p-4 grid gap-4">
            {education.card.map(
              ({ school, duration, degree, achievements }) => (
                <div key={school} className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-lg font-medium">{school}</p>
                    <span className="badge">{duration}</span>
                  </div>
                  <div>
                    <p className="font-medium">{degree}</p>
                    <ul className="text-sm">
                      {achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </Card>
        </Section>
      </Main>
    </>
  );
};

export default App;
