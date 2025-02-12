import React from 'react';
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa';
const productdata=[
    {
        id:1,
        image:Img1,
        tittle:"Casual Wear",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt quos quis omnis numquam ratione laborum cum nihil corrupti perferendis."
    },
    {
        id:2,
        image:Img2,
        tittle:"Printed Shirt",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt quos quis omnis numquam ratione laborum cum nihil corrupti perferendis."
    },
    {
        id:2,
        image:Img3,
        tittle:"Women Shirt",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt quos quis omnis numquam ratione laborum cum nihil corrupti perferendis."
    }
]

function index({handlepopup}) {
  return (
    <div className='container'>
        <div className='text-left mg-24'>
            <p data-aos="fade-up" className='text-sm text-primary'>
                Top Rated Products For You
            </p>
            <h1 className='text-3xl font-bold' data-aos="fade-up" >
                Best Products
            </h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut nostrum aspernatur nulla facere voluptas minus ratione, rem praesentium optio amet.
            </p>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {
                        productdata.map((data)=>{
                            return(
                                <div data-aos="zoom-in" className='mt-20 text-center rounded-2xl p-4 bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]' key={data.id}>
                                    <div>
                                        <img src={data.image} className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' alt="" />
                                    </div>
                                    <div className='w-full flex items-center justify-center gap-1'>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.tittle}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                                        {data.description}
                                    </p>
                                    <button className='bg-primary hover:scale-105 duration-300 text-wite py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary ' onClick={handlepopup}>
                                        Order Now
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default index