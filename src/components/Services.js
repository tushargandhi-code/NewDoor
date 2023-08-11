import React from 'react'
import Navbar from './Navbar'
import logo6 from '../images/p1.png'
import logo1 from '../images/p5.png'
import logo2 from '../images/p7.png'
import logo3 from '../images/p8.png'
import logo4 from '../images/p12.png'
import logo5 from '../images/p11.png'
import Footer from './Footer'
import Fade from 'react-reveal/Fade';
const Services = () => {
  return (
    <div>
      <Navbar className="hello"/>
      <img className=" hi"  src="https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3fGVufDB8fDB8fHww&w=1000&q=80"/>
      <div className="text z-10">
      <h1 className='text-white text-5xl font-extrabold font '>SERVICES</h1>
        <p className='text-white text-4xl font-semibold mt-3'>All Types Of Services Avaialable Here</p>
      </div>
      <Fade left>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="text-4xl font-medium title-font mb-2 text-gray-900">Real Estate Services</h1>
      <p className="lg:w-1/2 w-full leading-relaxed mt-2 text-lg text-gray-500">One-stop destination for all your property-related needs</p>
    </div>
    <div className="flex flex-wrap -m-4">
      
      <div  className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hv">
      <a href='https://housing.com/in/buy/noida/house-noida'></a>
        <div className="border border-gray-200 p-6 rounded-lg">
          <div>
          
            <img className="w-10 h-10 inline-flex items-center justify-center  bg-white text-indigo-500 mb-4" src={logo6}/>
          </div>
          <a href='https://housing.com/in/buy/noida/house-noida' target='_blank'> 
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Family House</h2>
          <p className="leading-relaxed text-base">The home is the most important place for a child. It is within the home that the most important values are taught.</p>
          </a>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hv">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div>
            <img className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4" src={logo1}/>
          </div>
          <a href="https://housing.com/in/buy/noida/villas-noida?gclid=Cj0KCQjwldKmBhCCARIsAP-0rfyo4w92S1xQWoCAftX4iczStROrzX0lHLkcIXRGK8nKfnpst0PcKN0aAjUAEALw_wcB" target="_blank">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">House &amp; villa</h2>
          <p className="leading-relaxed text-base">A villa is a fairly large house, especially one that is used for holidays in Mediterranean countries.</p>
          </a>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hv">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div>
            <img className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4" src={logo2} />
          </div>
          <a href="https://housing.com/in/buy/new_delhi/new_delhi"target='_blank'>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Apartment</h2>
          <p className="leading-relaxed text-base">Apartments are typically one-story units within a multifamily or multi-unit building.</p>
          </a>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hv">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div>
            <img src={logo3} className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"/>
            
          </div>
          <a href="https://estatelion.com/office-space-rent/noida?utm_term=office%20space%20in%20noida&utm_campaign=Noida+Search+-+Universal&utm_source=adwords&utm_medium=ppc&hsa_acc=1838826095&hsa_cam=17988742957&hsa_grp=145512734368&hsa_ad=615519793354&hsa_src=g&hsa_tgt=kwd-14249075272&hsa_kw=office%20space%20in%20noida&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad=1&gclid=Cj0KCQjwldKmBhCCARIsAP-0rfzDvaWYkBQ3dIiNR0D6fBa6d6r2F7PogsgqIiezsk8uK8I8WY93VOIaArvQEALw_wcB" target='_blank'>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Office</h2>
          <p className="leading-relaxed text-base">It is a department of an organization where people deal with a particular kind of administrative work.</p>
          </a>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hv">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div>
            <img src={logo4} className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"/>
           
          </div>
          <a href="https://www.magicbricks.com/studio-apartment-for-rent-in-noida-pppfr" target='_blank'>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Studio</h2>
          <p className="leading-relaxed text-base">A studio is a room where radio or television programmes are recorded, CDs are produced, or films are made.</p>
          </a>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hv">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div>
            <img src={logo5} className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"/>
          </div>
          <a href="https://www.99acres.com/commercial-property-for-rent-in-delhi-ncr-ffid" target='_blank'>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Commercial Space</h2>
          <p className="leading-relaxed text-base">It is a broad real estate term referring to any space used for business or professional purposes.</p>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</section>  
<Footer/>
</Fade>

    </div>
  )
}

export default Services
