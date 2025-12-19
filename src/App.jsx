import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Hero2 from "./components/Hero2"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScroolToTop"



function App() {

  const location = useLocation();

  return (
    <div className=" dark:bg-[#0c0a09] bg-[#f5f5f4] background-color font-Parkinsans tracking-wider">
      <Navbar/>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero className= 'font-nato'/>
              <Hero2/>
            </>
          }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {location.pathname !== '/contact' && <Footer/>} 
    </div>
  )
}

export default App
