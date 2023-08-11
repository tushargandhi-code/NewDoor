import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Fade from 'react-reveal/Fade';



const About = () => {
  return (
    <div>
      <Navbar className="hello"/>
      <img className=" hi"  src="https://www.wallpaperflare.com/static/985/795/788/nature-river-boat-trees-wallpaper.jpg"/>
      <div className="text z-10">
        <h1 className='text-white text-5xl font-extrabold font '>ABOUT US</h1>
        <p className='text-white text-4xl font-semibold mt-3'>The Definition Of Elite Real Estate</p>
      </div>
     <Fade left>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>  
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 top text-4xl title-font font-semibold mb-2">Our History</h2>
        <p className="leading-relaxed mt-3 text-lg">NewDoor constantly help families find and sell homes and we have a defining culture of doing much more than just selling real estate.We share the culture of serving each other, our communities and our planet. Our mission, vision, values and culture differentiate us as industry innovators and leaders.</p>
       
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 top text-4xl title-font font-semibold mb-2">Our Mission</h2>
        <p className="leading-relaxed mt-3 text-lg">Our mission is to inspire a positive, lasting impact. The technology we build helps real estate agents become more efficient at their job and find more customers to deliver on that mission. Our training prepares agents to be even better by utilizing exceptional techniques and systems.</p>
        
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 top text-4xl title-font font-semibold mb-2">Our Vision</h2>
        <p className="leading-relaxed mt-3 text-lg">Our goal is to forever change the real estate industry through superior talent, proven systems & models, and revolutionary technology.  We want to win at what we do, and we do all we can to help our customers, agents and employees build wealth. We love to work with people who are passionate about working hard .</p>
        
      </div>
    </div>
    
  </div>
</section>
<Footer/>
</Fade>
    </div>
  )
}

export default About
