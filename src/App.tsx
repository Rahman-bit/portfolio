
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavigationBar from "./components/NavigationBar";
import Admin from "./pages/Admin";
import WhatsappIcon from './components/WhatsappIcon';

function App() {

  return (
    <Router>
      <NavigationBar />
     <Routes>
       <Route path="/" element={ <Home />} />
       <Route path='/about' element={<About />} />
       <Route path="/resume" element={ <Resume />} />
       <Route path="/portfolio" element= { <Portfolio />} />
       <Route path="/contact" element={ <Contact />} />
       <Route path="/admin" element={ <Admin />} />
     </Routes>
     <WhatsappIcon />
    </Router>
  )
}

export default App
