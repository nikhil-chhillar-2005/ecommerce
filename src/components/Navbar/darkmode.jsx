import React, { useEffect, useState } from 'react'
import Lightbutton from '../../assets/website/light-mode-button.png';
import Darkbutton from '../../assets/website/dark-mode-button.png';


export default function Darkmode() {

    const [theme,settheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
    const element=document.documentElement;
    
    useEffect(()=>{
        if(theme==="dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    })
    
  return (
    <div className='relative'>
        <img src={Lightbutton} alt="light button" onClick={()=>{
            settheme(theme=="light"?"dark":"light");
        }}
        className={`w-12 h-6 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 top-1/2 translate-y-1/2  z-10 aspect-square ${theme=="dark"? "opacity-0":"opacity-100"}`} />
        <img src={Darkbutton} alt="" onClick={()=>{
            settheme(theme=="light"?"dark":"light");
        }} 
        className='w-12 h-6 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300  absolute right-0 top-1/2 translate-y-1/2 '/>
    </div>
  )
}
