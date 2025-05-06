import React from 'react'
import Image from './utill'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Cards() {
    
  return (
    <>
    {Image.map((ImageVar,index)=>{
        return(
          <div id={index} className='card max-w-xl sticky top-[15vh]  text-center flex items-center flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#383027]'>
      <img src={ImageVar} alt="image" className='w-[150px]'/>
      <h1>
        The <br />
        <span className='font-bold'>
        Algorithm
        </span>
      </h1>
      <p
      className='font-thin'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, temporibus?
      </p>
    </div>
        )
      })
    }
    </>
  )
}

export default Cards
