import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';


function App() {
  
  return (
    <>
    <div className="App">

      

    <BrowserRouter>
      <Routes>

      <Route path ='/' element={<Home/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path ='/service' element={<Services/>}/>
      <Route path ='/blog' element={<Blog/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      

      </Routes>
      </BrowserRouter>


      
    </div>
    </>
  );
}

export default App;
