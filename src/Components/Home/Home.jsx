import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import NK from '../../assets/images/Avatar.png'
import './Home.css'
import Darkmode from '../Layout/Darkmode'
import Project from '../Projects/Project'


const Home = () => {
  return (
    <>


      {/* absolute top-0 left-0 bg-black-50 rounded-full  drop-shadow-purple-500 shadow-xl inset-shadow-sm */}

      <Header />

      <div className="  h-[100vh] w-full flex flex-col md:flex-row ">
        {/* <div className=" z-0   h-screen w-full flex flex-col md:flex-row shadow-xl md:shadow-hidden"> */}

       

    

        <div class="avatar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 
            w-[600px] h-[600px] 
            bg-purple-300 rounded-full blur-3xl opacity-30 -z-10">
        </div>

        {/* left box */}  
        <div className="h-screen w-3xl  flex justify-center max-md:hidden">
          <div class=" absolute bottom-13 flex flex-col  gap-24">

            <div class="px-6 py-3  bg-white/40 border border-white/40 rounded-xl shadow  fade-up delay-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl -rotate-13 animate-ping">
              <p class="font-semibold text-sm">6 Months Experience</p>
            </div>

            <div class="px-6 py-3 bg-white/40 border border-white/40 rounded-xl shadow  fade-up delay-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl rotate-9">
              <p class="font-semibold text-sm">7+ Projects Completed</p>
            </div>

            <div class="px-6 py-3 bg-white/40 border border-white/40 rounded-xl shadow fade-up delay-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl -rotate-5 ">
              <p class="font-semibold text-sm text-green-600">Available for Job & Freelance</p>
            </div>

          </div>


          {/* social buttons */}
          {/* <div class="absolute bottom-15 flex items-center justify-center gap-6">
            <span class="h-px w-10 bg-gray-300"></span>

            <div class="flex gap-6 text-gray-400 text-sm">
              <a href="#" class="hover:text-purple-500 transition">GitHub</a>
              <a href="#" class="hover:text-purple-500 transition">LinkedIn</a>
              <a href="#" class="hover:text-purple-500 transition">Twitter</a>
            </div>

            <span class="h-px w-10 bg-gray-300"></span>
          </div> */}

        </div>
        <div className="h-screen w-full flex justify-center ">
          <div className="about  absolute top-26 flex flex-col text-center items-center">
            <div className="greet flex items-center">
              <div className="line h-[2px] w-[20px] bg-purple-800 relative right-2"></div>
              <h2 className='text-sm md:text-base font-medium tracking-widest uppercase'>Hi there</h2>
            </div>
            <h1 class="  text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight  ">
              I'm <span class="text-purple-400 name">Narendra Kumar</span>
            </h1>
            <h2 class="text-lg md:text-2xl font-medium text-gray-600">
              Web Developer
            </h2>
            <p class="mt-1 text-gray-500 text-sm max-w-md mx-auto max-sm:w-88">
              I design and build modern, high-performance web experiences.
            </p>
          </div>
          <img src={NK} alt="NK img" className='h-104  w-76 absolute bottom-0 brightness-110 contrast-110 saturate-100' />
        </div>

        {/* right box */}
        <div className="h-screen w-3xl flex justify-center ">
          {/* <Darkmode /> */}
          {/* <!-- Buttons --> */}
          <div class="absolute bottom-10 max-md:left-0 max-md:bottom-0 max-md:backdrop-blur-md max-md:bg-white/30 max-md:shadow-md flex items-center gap-6 max-md:w-full max-md:py-2 max-md:justify-center max-md:bg-red-500">

            {/* <!-- Primary Button --> */}
            <a href="/about"
              class="px-8 py-3 border border-black text-black text-sm tracking-widest uppercase 
            hover:bg-black hover:text-white transition-all duration-300 lg:px-5 md:px-2 ">
              About Me
            </a> 

            {/* <!-- Secondary Button --> */}
            <a href="#contact"
              class="text-sm tracking-widest uppercase text-black 
            hover:text-purple-800 max-md:hover:text-purple-900 transition-all duration-300 ">
              Contact →
            </a>

          </div>

        </div>

      </div >




      <Project />
      <Footer />
    </>
  )
}

export default Home