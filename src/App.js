
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from './components/layout';
import Home from './components/Home';
import About from './components/About';
import Contact from "./components/Contact";
import Portfolio from './components/portfolio';
import Education from "./components/Ed&Ex/Education"






function App() {
  


  return (
    <>
    <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="about/experience" element={<Education/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
    </Routes>
      
      
    </>
  )
}

export default App;