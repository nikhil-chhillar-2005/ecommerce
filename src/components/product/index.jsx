import React from 'react'
import Image1 from '../../assets/women/women.png'
import Image2 from '../../assets/women/women2.jpg'
import Image3 from '../../assets/women/women3.jpg'
import Image4 from '../../assets/women/women4.jpg'
import { FaStar } from 'react-icons/fa'
export default function Index() {
    const productdata=[
        {
            id:1,
            img:Image1,
            tittle:"Women Ethenic",
            rating:5.0,
            color:"white",
            aosdelay:0
        },
        {
            id:2,
            img:Image2,
            tittle:"Women Ethenic",
            rating:4.0,
            color:"white",
            aosdelay:200
        },
        {
            id:3,
            img:Image3,
            tittle:"Women Western",
            rating:4.5,
            color:"",
            aosdelay:400
        },
        {
            id:4,
            img:Image4,
            tittle:"Googles",
            rating:4.7,
            color:"white",
            aosdelay:600
        },
                            
    ]
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>
                    Top Selling Prodeuct For You
                </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>
                    Products
                </h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aspernatur fuga tempora?</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid:cols-4 place-items-center gap-5'>
                {
                    productdata.map((data)=>{
                        return(
                            <div data-aos="fade-up" data-aos-delay={data.aosdelay} key={data.id} className='space-y-3'>
                                <img src={data.img} alt="cover img" className='h-[220px] w-[150px] object-cover rounded-md' />
                                <div>
                                    <h3 className='font-semibold'>{data.tittle}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className='text-yellow-400'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md '>
                    View All buttons
                </button>
            </div>
        </div>
    </div>
  )
}
