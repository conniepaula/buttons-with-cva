import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ButtonTable from "./components/ButtonTable";
import Header from "./components/Header";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="absolute flex justify-between w-full h-full">
      <article className="flex flex-col gap-11 px-20 py-24 w-full">
        <Header />
        <ButtonTable />
        {/* <footer>This was built during Rocketseat's second week of "Let's build".</footer> */}
      </article>
      <aside className="bg-[#130F1E] h-full max-w-md lg:w-full xs:w-0">
        {" "}
        This is my aside
      </aside>
    </main>
  );
}

export default App;
