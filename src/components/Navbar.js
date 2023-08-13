import React , {useState , useRef} from 'react'
import logo from '../images/logo2.png'
import { NavLink } from 'react-router-dom'
import {FaBars , FaTimes} from "react-icons/fa";


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  return (
    <div className='helllo'>
     <header className="text-gray-600     bg-white body-font border-6 border-purple rounded-3xl hello m-4 z-20">
  <div className="container n mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <a className="flex title-font   font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src={logo} />
      <span className="nav ml-3  text-2xl font-semibold text-3xl ">New<span className="text-fuchsia-600">Door</span></span>
      
    
    </a>
   
    
    <nav className="md:ml-auto md:mr-auto   flex flex-wrap  items-center text-base justify-center">
      <ul className=''>

      
     <li ><NavLink  className=" cursor-pointer hover:text-gray-900" to ="/">Home</NavLink></li>
     <li ><NavLink  className=" cursor-pointer hover:text-gray-900" to ="/about">About</NavLink></li>
     <li ><NavLink  className=" cursor-pointer hover:text-gray-900" to ="/service">Services</NavLink></li>
     <li ><NavLink  className=" cursor-pointer hover:text-gray-900" to ="/blog">Blog</NavLink></li>
      </ul> 
    </nav>
    <NavLink className='btn' to="/contact">
    <button className="  inline-flex items-center text-lg bg-fuchsia-600 text-black  border-0 py-3 px-6 focus:outline-none hover:bg-fuchsia-700 rounded-3xl text-base mt-7 md:mt-0">Contact
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </NavLink>
    
  </div>
</header>

    </div>
  )
}

export default Navbar
