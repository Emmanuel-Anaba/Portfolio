import Aside from "./sections/Aside";
import Main from "./sections/Main";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Section from "./components/Section";
import Card from "./components/Card";
import {
  FaCode,
  FaPalette,
  FaMapLocationDot,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import img from "./assets/img/ben.jpeg";
import Form from "./sections/Form";

const App = () => {
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

  const educationAndExperience = [
    {
      hp: "Education",
      card: [
        {
          place: "University Of Ibadan",
          duration: "2024 - present",
          status: "Bachelor of Medicine and Surgery (MBBS)",
          achievements: ["Volunteer, Community Health Clinic 😏"],
        },
      ],
    },
    {
      hp: "Experience",
      card: [
        {
          place: "Swebs Institute",
          duration: "2023 - present",
          status: "Junior FrontEnd Developer",
          achievements: [
            "Developed a personal portfolio website using HTML, CSS, and JavaScript.",
            "Collaborated on building an e-commerce platform, using React",
          ],
        },
      ],
    },
  ];

  const testimonials = {
    hp: "Testimonials",
    cards: [
      {
        img: img,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur sed in incidunt voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus dolor praesentium dicta nam est, voluptatem voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus",
        name: "Onyedika Benjamin",
      },
      {
        img: img,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur sed in incidunt voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus dolor praesentium dicta nam est, voluptatem voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus",
        name: "Onyedika Benjamin",
      },
      {
        img: img,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur sed in incidunt voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus dolor praesentium dicta nam est, voluptatem voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus",
        name: "Onyedika Benjamin",
      },
    ],
  };

  const contact = {
    hp: "Get In Touch",
    infoCards: [
      {
        icon: <FaMapLocationDot />,
        info: [
          { h: "Country:", p: "Nigeria" },
          { h: "City:", p: "Lagos" },
          { h: "Town:", p: "Ikeja" },
        ],
      },
      {
        icon: <FaEnvelope />,
        info: [
          { h: "Email:", p: "emmaanaba29@gmail.com" },
          { h: "Skype:", p: "emmaanaba29@gmail.com" },
          { h: "Telegram:", p: "emmaanaba29@gmail.com" },
        ],
      },
      {
        icon: <FaPhone />,
        info: [
          { h: "Support:", p: "ihechimereanaba@gmail.com" },
          { h: "Office:", p: "+234 803 5706 972" },
          { h: "Personal:", p: "+234 803 5706 972" },
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <Aside />
      <Main>
        <Header />
        <Section id="services">
          <div className="section-heading">
            <p className="section-heading-primary">{services.hp}</p>
            <p className="section-heading-secondary">{services.hs}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-1">
            {services.cards.map(({ icon, h, list }) => (
              <Card key={h} className="p-4 grid gap-2 content-evenly">
                <span className="icon">{icon}</span>
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
        {educationAndExperience.map(({ hp, card }) => (
          <Section key={hp} id={hp.toLowerCase()}>
            <div className="section-heading">
              <p className="section-heading-primary">{hp}</p>
            </div>
            <Card className="p-4 grid gap-4">
              {card.map(({ place, duration, status, achievements }) => (
                <div key={place} className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-lg font-medium">{place}</p>
                    <span className="badge">{duration}</span>
                  </div>
                  <div>
                    <p className="font-medium">{status}</p>
                    <ul className="text-sm">
                      {achievements.map((item) => (
                        <li key={item}>&rarr; {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Card>
          </Section>
        ))}
        <Section>
          <div className="section-heading">
            <p className="section-heading-primary">{testimonials.hp}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {testimonials.cards.map(({ img, text, name }, i) => (
              <Card key={i} className="p-4 cursor-default">
                <div className="circle">
                  <img src={img} alt={name} />
                </div>
                <p>{text}</p>
                <p className="text-right font-medium">{name}</p>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="contact">
          <div className="section-heading">
            <p className="section-heading-primary">{contact.hp}</p>
          </div>
          <div className="grid md:grid-cols-9 gap-1">
            {/* I'm thinking of moving the form into a separate component  */}
            <Form />
            <div className="grid md:col-span-2 gap-1">
              {contact.infoCards.map(({ icon, info }, i) => (
                <Card
                  key={i}
                  className="rounded-md bg-blue-700 p-3 grid items-center gap-2 text-xs">
                  <span className="icon m-auto">{icon}</span>
                  {info.map(({ h, p }) => (
                    <p key={h}>
                      {h}
                      <i className="float-right">{p}</i>
                    </p>
                  ))}
                </Card>
              ))}
            </div>
          </div>
        </Section>
        <footer className="bg-blue-700 h-12 w-full rounded-lg grid place-items-center">
          <p>&copy; {new Date().getFullYear()} Emmanuel Anaba Inc. 😎 </p>
        </footer>
      </Main>
    </>
  );
};

export default App;
