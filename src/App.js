import Navbar from "./Navbar"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Slider from "./pages/Slider"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App