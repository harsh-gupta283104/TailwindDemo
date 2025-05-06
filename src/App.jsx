"use client";
import React, { useEffect } from 'react';
import './index.css'; // You have to import css for tailwind css to run
import Image from './component/utill'; // I have made a variable for image in array.
import gsap from 'gsap'; // before import gsap install it, and use in useEffect
import { ScrollTrigger } from 'gsap/all'; // This is the part of gsap
import Cards from './component/cards';
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger)
function App() {
  // excuting the gsap by useEffect 
  useEffect(() => {
    
    // converting all card element in an array
    gsap.utils.toArray('.card').forEach((card) => {
      //applying gsap
      gsap.to(card, {
        scale: 0, // scalling 0
        opacity: 0, //opicity to 0
        scrollTrigger: { // this how scroll trigger works
          trigger: card,
          start: 'top 15%',
          end: 'bottom 15%',
          // markers: true,
          scrub:true,
        },
      });
    });
  }, []);

  return (
  <>
  <main className='w-full  text-white flex flex-col gap-5 items-center py-[20vh] data-scroll-container'>
    <Cards/>
    
  </main>
  </>    
  )
}

export default App;
