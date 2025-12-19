import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";

import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Gigs from "./pages/Gigs.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gigs" element={<Gigs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
