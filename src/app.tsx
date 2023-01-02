import About from "./info/about.tsx";
import Contact from "./info/contact.tsx";
import Hw from "./hw.tsx";

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1> フヒューバイジャーンへようこそ． </h1>
      <About />
      <Contact />
      <Hw />
    </div>
  );
};

export default App;
