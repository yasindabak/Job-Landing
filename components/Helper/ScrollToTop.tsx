"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {

    const [isvisible, setIsvisible] = useState(false);

    // show and hide  funcionality
    useEffect(()=> {
        const toggleVisibility = () => {
            if(window.scrollY > 300) setIsvisible(true)
                else setIsvisible(false);

        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);

    },[]);

    // scroll functionality

    const ScrollToTop=() =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }
  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {isvisible && (
            <button className='bg-blue-700 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none' onClick={ScrollToTop}>
                <FaArrowUp />
            </button>
        )}
    </div>
  )
}
