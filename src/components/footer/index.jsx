import React from 'react'
import { FiShoppingBag } from 'react-icons/fi' ;
import { FaMapLocation, FaMapLocationDot } from 'react-icons/fa6';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt
} from "react-icons/fa";
import { IoCall } from 'react-icons/io5';

const links=[
    {
        tittle:"Home",
        link:"/#"
    },
    {
        tittle:"About",
        link:"/About"
    },
    {
        tittle:"Blog",
        link:"/Blog"
    },
    {
        tittle:"Contact",
        link:"/Contact"
    }
]
const index = () => {
  return (
    <div className='text-white bg-[#212529] '>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5 '>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex item-centergap-1'>
                        <FiShoppingBag size={30} />
                        ShopMe
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo aliquam dolores repellat odit doloribus provident ipsam, laborum veritatis quod? Beatae assumenda ullam sequi, itaque nihil cumque maxime. Rerum pariatur fugit repellat.</p>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl font-bold text-xl sm:text-left text-justify mb-3'>
                            Important Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                links.map((data)=>(
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={data.tittle}>
                                       {data.tittle} 
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex item-center gap-3 mt-6'>
                        <a href="#">
                            <FaInstagram className='text-3xl' />
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl' />
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl' />
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex item-center gap-3'>
                            <FaMapLocationDot  />
                            <p>Bahadurgarh,Haryana</p>
                        </div>
                        <div className='flex item-center gap-3'>
                            <IoCall  />
                            <p>+91 9729247510</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index