import { useState } from "react";
import Header from "./components/header/Header";
import Project from "./components/main/Project";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  const [onOffBtn, setOnOffBtn] = useState(0);
  const headerSwitchHandler = (index) => {
    setOnOffBtn(index);
  };

  return (
    <div>
      <Header onOffBtn={onOffBtn} headerSwitchHandler={headerSwitchHandler} />
      <main>
        <Project onOffBtn={onOffBtn} />
        <About />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
