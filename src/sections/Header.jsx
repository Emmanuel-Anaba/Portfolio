import { useTypewriter, Cursor } from "react-simple-typewriter";
import me from "../assets/img/me-lg.png";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Front End Developer", "Pianist", "Doctor"],
    loop: Infinity,
    delaySpeed: 2500,
  });
  return (
    <header className="bg-blue-700 w-full h-[85svh] rounded-lg grid md:grid-cols-2 items-center lg:justify-between px-4 gap-4">
      <div className="grid gap-4">
        <p className="text-5xl font-medium">Hi! 👋 I&apos;m Emmanuel</p>
        <p className="text-4xl">
          <i>{text}</i>
          <Cursor />
        </p>
      </div>
      <img className="h-full" src={me} alt="me" />
    </header>
  );
};

export default Header;
