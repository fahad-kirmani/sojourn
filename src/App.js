import { Routes, Route } from "react-router-dom"
import './App.scss';
import Navbar from "./components/Navbar";
import NavbarMob from "./components/NavbarMob";
import Header from "./components/Header";
import ContactButton from "./components/ContactButton";
import Home from "./components/Home";
import About from "./components/About";
import Room from "./components/Room";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <div className="header">
    <Navbar/>
    <NavbarMob/>
    <Header/>
    <ContactButton/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/room" element={<Room/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
