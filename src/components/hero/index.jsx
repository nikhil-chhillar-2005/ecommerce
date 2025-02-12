import React from 'react';
import Slider from 'react-slick';
import Image1 from "../../assets/hero/women.png";
import Image2 from '../../assets/hero/shopping.png';
import Image3 from "../../assets/hero/sale.png";
function Index({handlepopup}) {
    const Imagelist=[
        {
            "id":1,
            "img":Image1,
            "tittle":"Upto 75% off on men's wear",
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem at labore. Dolorum quas deleniti beatae reiciendis sint, fugit repellat assumenda ipsum."
        },
        {
            "id":2,
            "img":Image2,
            "tittle":"Upto 50% off on women's wear",
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem at labore. Dolorum quas deleniti beatae reiciendis sint, fugit repellat assumenda ipsum."
        },
        {
            "id":3,
            "img":Image3,
            "tittle":"Upto 70% off on all sale product",
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem at labore. Dolorum quas deleniti beatae reiciendis sint, fugit repellat assumenda ipsum."
        }
    ]
    var setting={
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true
    }
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center item-center dark:bg-slate-950 dark:text-white duration-300'>
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 -z[8] right-0 rotate-45 rounded-3xl '></div>
        <div className='container pb-8 sm:pb-0'>
            <Slider {...setting}>
                {
                    Imagelist.map((data)=>{
                        return(
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 data-aos="zoom-out" data-aos-duration="600" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                            {data.tittle}
                                        </h1>
                                        <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className='text-sm'>
                                            {data.description}
                                        </p>
                                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                            <button onClick={()=>{
                                                handlepopup();
                                            }}
                                            className='bg-gradient-to-r from-primary to to-secondary hover:scale-105 duration-200 text-white py02 px-4 rounded-full'>
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className='relative z-10' data-aos="zoom-in" data-aos-once="true">
                                            <img src={data.img} alt="slider img"
                                            className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto ' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
  )
}

export default Index