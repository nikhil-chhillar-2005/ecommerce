import React from 'react';
import Slider from 'react-slick';

const data = [
    {
        id: 1,
        name: "Victor",
        img: "https://picsum.photos/101/101",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto facere suscipit accusamus dolores, adipisci beatae officiis nobis, fuga asperiores aliquam, nulla pariatur atque quaerat?"
    },
    {
        id: 2,
        name: "Satya",
        img: "https://picsum.photos/101/101",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto facere suscipit accusamus dolores, adipisci beatae officiis nobis, fuga asperiores aliquam, nulla pariatur atque quaerat?"
    },
    {
        id: 3,
        name: "Virat Vikram",
        img: "https://picsum.photos/102/102",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto facere suscipit accusamus dolores, adipisci beatae officiis nobis, fuga asperiores aliquam, nulla pariatur atque quaerat?"
    },
    {
        id: 4,
        name: "Kachra Seth",
        img: "https://picsum.photos/103/103",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto facere suscipit accusamus dolores, adipisci beatae officiis nobis, fuga asperiores aliquam, nulla pariatur atque quaerat?"
    },
    {
        id: 5,
        name: "Victor",
        img: "https://picsum.photos/101/101",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto facere suscipit accusamus dolores, adipisci beatae officiis nobis, fuga asperiores aliquam, nulla pariatur atque quaerat?"
    }
]

export default function index() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slideToScroll: 1,
                    slideToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slideToScroll: 1,
                    slideToShow: 2,
                    initialSlider: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1
                }
            }
        ]
    }
    return (

        <div className='py-10 mb-10'>
            <div className='container'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>
                        What Our Custmer Are Saying
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold' >Testenomials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400 '> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, possimus. Eligendi quod ea, voluptates dolorum at expedita nulla. Optio, neque modi.</p>

                </div>
                <div data-aos="zoom-in" >
                    <Slider {...settings}>
                        {
                            data.map((data) => {
                                return (
                                    <div className='my-6' key={data.id}>
                                        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative'>
                                            <div className='mb-4'>
                                                <img src={data.img} alt=""
                                                    className='rounded-full w-20 h-20' />
                                            </div>
                                            <div className='flex flex-col item-center gap-4'>
                                                <div className='space-y-3'>
                                                </div>
                                                <p className='text-xs text-black/80 dark:text-slate-300 dark:text-light'>{data.text}</p>
                                                <h1 className='text-xl font-bold dark:text-slate-300 dark:text-light text-black/80'>{data.name}</h1>
                                            </div>
                                        </div>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}
