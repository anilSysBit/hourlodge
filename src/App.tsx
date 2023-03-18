import { useState } from "react";
import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import HomePage from "./pages/HomePage";
import Footer from "./globalComponents/home/Footer";
import Explore from "./pages/Explore";
import PopopMessage from "./features/PopopMessage";

function App() {
  const [screen, setScreen] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        {screen ? <PopopMessage screen={setScreen} /> : null}
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
