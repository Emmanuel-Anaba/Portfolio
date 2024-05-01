import Aside from "./sections/Aside";
import Main from "./sections/Main";
import Nav from "./sections/Nav";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import me from "./assets/img/me-lg.png";

const App = () => {
  const [text] = useTypewriter({
    words: ["Front End Developer", "Pianist", "Doctor"],
    loop: Infinity,
  });

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
      </Main>
    </>
  );
};

export default App;
