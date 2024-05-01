import Aside from "./sections/Aside";
import Main from "./sections/Main";
import Nav from "./sections/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Aside />
      <Main className="bg-blue-700"></Main>
    </>
  );
};

export default App;
