import React from 'react'

import Navbar from './Navbar'
import logo1 from '../images/1.jpg'
import logo2 from '../images/3.jpg'
import logo3 from '../images/4.jpg'
import logo4 from '../images/5.jpg'
import logo5 from '../images/6.jpg'
import logo6 from '../images/7.jpg'
import logo7 from '../images/8.jpg'
import logo8 from '../images/9.jpg'
import logo9 from '../images/2.jpg'
import Footer from './Footer'
import Fade from 'react-reveal/Fade';


const Home = () => {
  return (
    <div>
      <Navbar className="hello"/>
      <img className=" hi"  src="https://wallpapers.com/images/featured/beautiful-house-x1yu28g8twzle26l.jpg"/>
      <div className="text z-10">
        <h1 className='text-white text-6xl font-bold font shadow-xl'>Search Your Next Home</h1>
        <p className='text-xl font-medium text-gray-300 px-2 py-4'>Forget all difficulties in finding a residence for you...</p>
        <a href='https://tushargandhi-code.github.io/NewDoor/service'>
        <button className="bg-transparent font-bold tracking-widest hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded">
  Get Started
</button>
        </a>
      </div>
      <Fade >
      <div id='contact'>
        
        <p className='top text-6xl text-center text-gray-900  mt-16  font-semibold tracking-wider  '>Best Choices And Popular Residencies</p> 
      </div>
      <section className="text-gray-600 -mt-7 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv " src={logo1} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Sector-124,Noida</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">ATS Knightsbridge </h1>
            <p className="leading-relaxed mb-3">It is a place to be for luxury seekers as they offer 4 BHK and 6 BHK apartments with a size ranging from 4,005 - 6,982 sq ft. It is spread on 6 acres of land with 215 luxurious apartments. Moreover, the luxury property has enormous salient features such as a wide 3.25 k sq.m Clubhouse. 3 tier security with five-star facilities at the luxury apartments in Noida.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://www.99acres.com/ats-knightsbridge-sector-124-noida-npxid-r268701?nn_account=google_cmt_projects&nn_campaign=13742861221_119493940290_614687985020&nn_medium=13742861221_119493940290_614687985020&nn_adtype=g_&nn_keyword=&nn_placement=&gclid=CjwKCAjw_aemBhBLEiwAT98FMujRUW25SX8mKwHHOhQqOG75wL8CO5t6ZWq9f0lGaQICdOKGa9V7IxoCGRkQAvD_BwE" target="_blank">Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv" src={logo2} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Okhla Phase - 1, Delhi</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">Godrej South Estate</h1>
            <p className="leading-relaxed mb-3">Godrej South Estate is a luxurious residential project located in South Delhi, offering 372 apartments with spacious balconies. The project is spread across 5.15 acres with 70% open space and consists of 4 towers. South Estate is developed by Godrej Properties and features advanced air purification systems and is located in a low-density area. </p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"href="https://www.luxuryresidences.in/godrej-south-estate-okhla-delhi/" target='_blank'>Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv" src={logo3} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Sector 65, Gurgaon</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">Trump Tower
</h1>
            <p className="leading-relaxed mb-3">Trump Tower in Gurgaon is a residential project by Tribeca Creators LLP. This posh high-rise comprises spacious 3 BHK and 4 BHK ultra luxury apartments that are located in Sector 65, Gurgaon. As you enter Tribeca Trump Tower, you'll get lured by the signature glass façade.The Trump Club, a personal utopia at your own backyard is the array of venues for entertainment, fitness and relaxation.

</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://www.luxuryresidences.in/trump-towers-sector-65-gurgaon/" target='_blank'>Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 -mt-32 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv" src={logo4} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">New Patel Nagar, Delhi</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">The Leela Sky Villas</h1>
            <p className="leading-relaxed mb-3">The Leela Sky Villas - The highest address in New Delhi. Tall is not just a measure of height, it's a maxim of achievement. Of how high you think, how lofty are your deeds and how tall you stand. You've created a niche in the highest echelons of society and it gives me great pleasure in personally inviting you to experience the privilege of the highest form of life.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"href="https://www.luxuryresidences.in/the-leela-sky-villas-central-delhi/" target='_blank'>Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv" src={logo5} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Sector 59, Gurgaon</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">Mahindra Luminare</h1>
            <p className="leading-relaxed mb-3">Mahindra Luminare, a luxury residential project that is made for chosen few. It offers 3 & 4 BHK ready to move in luxury apartments & penthouses in Sector 59, Golf course extension road Gurgaon. Luminare by Mahindra Lifespaces is carefully crafted with exceptional features that make it stand out from the rest and exclusive amenities and live the good life.

</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://www.luxuryresidences.in/mahindra-luminare-sector-59-gurgaon/" target='_blank'>Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv" src={logo6} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Sector 27, Greater Noida</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">Godrej Golf Links</h1>
            <p className="leading-relaxed mb-3">The villas at Godrej Golf Links are designed to provide a comfortable and luxurious lifestyle. Godrej Golf Links Villas is a perfect blend of luxury, comfort, and convenience. It offers an ideal living experience for families looking for a serene and tranquil environment, without compromising on the quality of life.

</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://www.luxuryresidences.in/godrej-golf-links-sector-27-greater-noida/" target="_blank">Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 -mt-32 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv" src={logo7} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Sector 48, Gurgaon</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">Central Park Bellavista Towers </h1>
            <p className="leading-relaxed mb-3">The Studio apartments manifest the best utilization of space and have been crafted to provide Japanese expats, the uniqueness of their culture. The 1BHK apartments are best suited for the big wigs of the Japanese corporate world who deserve an abode that mirrors their success.Central Park Bellavista Towers is very awesome and well maintained
</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://www.luxuryresidences.in/central-park-bellavista-sector-48-gurgaon/" target="_blank">Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv" src={logo8} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Sector 144, Noida</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">Gulshan Dynasty</h1>
            <p className="leading-relaxed mb-3">Gulshan Dynasty has excellent connectivity with all major highways, expressways and airports. The project offers high-speed elevators, a green environment, and air-conditioned apartments with world-class amenities. This is why Gulshan is one of the most coveted places to live in Delhi-NCR.The project includes several amenities to ensure mental and physical health.

</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"href="https://www.luxuryresidences.in/gulshan-dynasty-noida-sector-144-noida/" target='_blank'>Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center hv" src={logo9} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Moti Nagar, Delhi</h2>
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">DLF One Midtown
</h1>
            <p className="leading-relaxed mb-3">DLF One Midtown is an upcoming residential project that offers 2, 3 & 4 BHK Premium Apartments in Moti Nagar, West Delhi. It's a prestigious neighborhood with ultra-luxury homes surrounded by lush greenery, providing a contemporary high-rise lifestyle with 5-tier security. The 128 acres of greenery in DLF Midtown offer residents a refreshing escape and a diverse range of leisure activities.
</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://www.luxuryresidences.in/dlf-midtown-moti-nagar-delhi/cd" target='_blank'>Explore More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className='border-4 border-x-transparent border-purple-700 -mt-2'>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-5xl top font-semibold title-font mb-4 text-gray-900">New<span className="text-fuchsia-600">Door</span> - Growing among Indian Real Estate Websites</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-2">Real estate has been an important part of Indian society for centuries, with a rich and diverse history. The evolution of the real estate industry in India can be traced back to the ancient times when land was considered as one of the most valuable assets, and was owned by the ruling class and wealthy landowners.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">4.5K</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">8.0K</h2>
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">10.7k</h2>
          <p className="leading-relaxed">Likes</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
          <p className="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font -mt-20">
  <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 className="md:text-3xl lg:text-4xl font-normal title-font text-gray-900">India's only real estate platform with <span className='font-semibold'>10,000+ highly rated sellers</span></h2>
     
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span className="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">Download on the</span>
          <span className="title-font font-medium">App Store</span>
        </span>
      </button>
    </div>
  </div>
</section>
</div>

<section className="text-gray-600 body-font -mt-5">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-5xl font-semibold title-font top  text-gray-900 mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6"> Recently sold a house with one of the agent and while this can be a very stressful process, I felt 110% confident by partnering with him. He was candid, provided great feedback, helped explain clearly all details and managed the actual sale negotiation brilliantly.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://www.clinicdermatech.com/images/men-service-face.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Kevin Hook</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">He was extremely responsive  to every one of my questions, no matter how small. As I move forward to now BUY my next house, I am extremely certain Dave will be the right partner to help me navigate this process.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://w7.pngwing.com/pngs/109/994/png-transparent-teacher-student-college-school-education-avatars.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Rohan Gupta</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
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

export default Home
