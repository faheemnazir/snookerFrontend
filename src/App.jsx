import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/common/Footer";
import About from "./components/pages/About";
import Contact from './components/pages/Contact'
import Booking from "./components/pages/Booking";
import Courses from "./components/pages/Courses";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;