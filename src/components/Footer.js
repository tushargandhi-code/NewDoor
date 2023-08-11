import React from 'react'
import logo from '../images/logo2.png'

const Footer = () => {
  return (
    <div>
      
<footer className="text-gray-600 body-font bg-indigo-800">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img className='po' src={logo} />
        <span className="ml-3 text-white text-3xl">New<span className="text-fuchsia-600">Door</span></span>
      </a>
      <p className="mt-2 text-sm text-gray-400">Find a variety of properties that suit you very easily.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-white tracking-widest text-md mb-3">LAYOUTS</h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li className=''>
            <a href="https://developer.android.com/develop/ui/views/layout/declaring-layout#:~:text=A%20layout%20defines%20the%20structure,can%20see%20and%20interact%20with." target="_blank" className="text-gray-400 hover:text-gray-200">Home Page</a>
          </li>
          <li>
            <a href="https://developer.android.com/develop/ui/views/layout/declaring-layout#:~:text=A%20layout%20defines%20the%20structure,can%20see%20and%20interact%20with." target="_blank" className="text-gray-400 hover:text-gray-200">About Page</a>
          </li>
          <li>
            <a href="https://developer.android.com/develop/ui/views/layout/declaring-layout#:~:text=A%20layout%20defines%20the%20structure,can%20see%20and%20interact%20with." target="_blank" className="text-gray-400 hover:text-gray-200">Service Page</a>
          </li>
          <li>
            <a href="https://developer.android.com/develop/ui/views/layout/declaring-layout#:~:text=A%20layout%20defines%20the%20structure,can%20see%20and%20interact%20with." target="_blank" className="text-gray-400 hover:text-gray-200">Blog Page</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-white tracking-widest text-md mb-3">COMPANY</h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li className=''>
            <a href="https://en.wikipedia.org/wiki/Company" target='_blank' className="text-gray-400 hover:text-gray-200">About Us</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Company" target='_blank' className="text-gray-400 hover:text-gray-200">Blog</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Company" target='_blank' className="text-gray-400 hover:text-gray-200">Policy of use</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Company" target='_blank' className="text-gray-400 hover:text-gray-200">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-white tracking-widest text-md mb-3">ALL SECTIONS</h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a href="https://support.microsoft.com/en-au/office/configure-headers-and-footers-for-different-sections-of-a-document-94332643-a6e9-46aa-ab29-064f1d356db6" target="_blank" className="text-gray-400 hover:text-gray-200">Headers</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-au/office/configure-headers-and-footers-for-different-sections-of-a-document-94332643-a6e9-46aa-ab29-064f1d356db6" target="_blank"  className="text-gray-400 hover:text-gray-200">Features</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-au/office/configure-headers-and-footers-for-different-sections-of-a-document-94332643-a6e9-46aa-ab29-064f1d356db6" target="_blank"  className="text-gray-400 hover:text-gray-200">Testimonials</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-au/office/configure-headers-and-footers-for-different-sections-of-a-document-94332643-a6e9-46aa-ab29-064f1d356db6" target="_blank"  className="text-gray-400 hover:text-gray-200">Footers</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">RESOURCES</h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a href="https://en.wikipedia.org/wiki/Web_resource" target='_blank' className="text-gray-400 hover:text-gray-200">Data Intelligence</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Web_resource" target='_blank' className="text-gray-400 hover:text-gray-200">Real Estate Guide</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Web_resource" target='_blank' className="text-gray-400 hover:text-gray-200">Cities Real Estate</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Web_resource" target='_blank' className="text-gray-400 hover:text-gray-200">Awards & Recognition</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-300">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 NewDoor —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@tushargandhi</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a href="https://www.facebook.com/profile.php?id=100090706002324&mibextid=ZbWKwL" target='_blank' className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
       
        <a href="https://instagram.com/tushar.gandhi.771?igshid=NGExMmI2YTkyZg==" target='_blank' className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/tushar-gandhi-11851b227" target="_blank"className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
