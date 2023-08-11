import React ,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Fade from 'react-reveal/Fade';


const Contact = () => {
  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const click = (e)=>{
		e.preventDefault();
		setName('')
		setEmail('')
		setMessage('')
		alert("Submit Successfully !!")

} 

  return (
    <div>
      <Navbar className="hello"/>
      <img className=" hi"  src="https://images.hdqwalls.com/wallpapers/boat-aerial-view-from-sky-3f.jpg"/>
      <div className="text z-10">
      <h1 className='text-white text-5xl font-extrabold font '>CONTACT-US</h1>
        <p className='text-white text-4xl font-semibold mt-3'>Feel Free To Send Message To Us  </p>
      </div>
      <Fade left>
      <form onSubmit={click}>
		    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-5xl  font-semibold title-font mb-4 text-gray-800">Get In <span className="text-indigo-500">Touch</span></h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We always ready to help by providing the best services for you. we beleive a good place to live can make your life better.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder="Enter your name" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email"  className="leading-7 text-sm text-gray-600">Email</label>
            <input   placeholder="abc@gmail.com" value={email} onChange={(e) =>setEmail(e.target.value)}type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>

          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600 mt-52">Message</label>
            <textarea id="message" value={message} onChange={(e) =>setMessage(e.target.value)} placeholder="Type your message here" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            
          </div>
        </div>

        <div className="p-2 w-full">
          <button type="submit"  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit Request</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">tushargandhi634@gmail.com</a>
          <p className="leading-normal my-5">New Delhi.
            <br/>Krishna Nagar, 110051
          </p>
            
        </div>

      </div>
    </div>
  </div>
</section>
</form>
<Footer/>
</Fade>

    </div>
  )
}

export default Contact
