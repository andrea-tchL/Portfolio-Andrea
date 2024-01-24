import React from 'react'
import {burgerapp, portfolio, jeux} from "../assets/gif/index.js"; 
import { api } from '../assets/Images/index.js';


//Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Projects = () => {
  return (

    // container
    <section className=' w-screen h-screen flex justify-center items-center'>
      {/* //slider */}
        {/* //card-wrapper */}
        <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="flex w-1/2 h-1/2 "
      >
        <SwiperSlide style={{ backgroundImage: `url(${burgerapp})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} 
                      className='rounded-3xl shadow-2xl  shadow-[#c28671] flex gap-5 items-center justify-center'>
            <p className=' font-bold text-neutral-950'> Burger Website </p>

            <a href="https://github.com/andrea-tchL/burger_site" target="_blank">
            <button className=' bg-blue-700 text-black rounded-lg w-20'> Github</button>
            </a>

            <a href="https://burger-site-andrea.netlify.app/" target="_blank">
            <button className=' bg-blue-700 text-black rounded-lg w-20'> Site</button>
            </a>

        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: `url(${portfolio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}  
                    className=' rounded-3xl shadow-2xl  shadow-[#739072] flex gap-5 items-center justify-center'>
            <p className=' font-bold text-neutral-950'> Portolio Website </p>

            <a href="https://github.com/andrea-tchL/Portfolio-Andrea" target="_blank">
            <button className=' bg-red-900 text-black rounded-lg w-20'> Github</button>
            </a>

        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: `url(${api})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}  
                    className='  rounded-3xl shadow-2xl  shadow-[#3b82e4] flex items-center justify-center'>
            
            <a href="https://github.com/andrea-tchL/rest_API" target="_blank">
            <button className=' bg-green-800 text-black rounded-lg w-20 space-y-8 mt-72'> Github</button>
            </a>

        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: `url(${jeux})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}  
                    className='  rounded-3xl shadow-2xl  shadow-[#c9976c] flex gap-5 items-center justify-center'>
            <p className=' font-bold text-neutral-950'> Mini jeu Website </p>

            <a href="https://github.com/andrea-tchL/game" target="_blank">
            <button className=' bg-red-900 text-black rounded-lg w-20'> Github</button>
            </a>

            <a href="https://mini-game-andrea.netlify.app/" target="_blank">
            <button className=' bg-red-900 text-black rounded-lg w-20'> Site</button>
            </a>
        </SwiperSlide>

      </Swiper>

    </section>
  )
}

export default Projects