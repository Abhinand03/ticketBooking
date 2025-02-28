import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination, Autoplay } from 'swiper/modules';


function Swipers() {
    const offerList = [
        { id: 1, image: "https://www.goldcinema.co/images/offer_banner.jpg?v=1" },
        { id: 2, image: "https://s3images.coroflot.com/user_files/individual_files/large_1011406_yexa7fmuv0wufb4dho5niw7r0.png" },
        { id: 3, image: "https://assets-in.bmscdn.com/webin/static/offers/rbloffer/rbl-popcorn-credit.jpg?v2" },
    ];

    return (
        <div className='mt-3'>
            <Swiper 
                spaceBetween={10} 
                slidesPerView={1} 
                loop={true} 
                modules={[ Pagination, Autoplay]} 
                pagination={{ clickable: true }} 
                autoplay={{ delay: 3000 }}
            >
                {offerList.map(item => (
                    <SwiperSlide key={item?.id}>
                        <div className='flex  justify-center px-5'>
                        <img src={item?.image} className='h-80 w-[75%] rounded-xl' alt="Movie Poster" />

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Swipers;
