"use client";
import { TRooms } from '@/app/types/rooms.type';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; 
import Slider from 'react-slick';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiHeart } from 'react-icons/fi';

export type TCardProps = {
    room: TRooms;
};

// Custom Previous Button
const PreviousBtn = ({ onClick }: any) => (
    <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 z-10"
        onClick={onClick}
    >
        <IoIosArrowBack size={20} />
    </button>
);

// Custom Next Button
const NextBtn = ({ onClick }: any) => (
    <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white  text-black rounded-full p-2 z-10"
        onClick={onClick}
    >
        <IoIosArrowForward size={20} />
    </button>
);

const Card = ({ room }: TCardProps) => {
    const isGuestFavorite = room.ratings >= 4.9;

    // Slick Slider settings
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />, 
        nextArrow: <NextBtn />,    
  
        
    };

    return (
        <div className="rounded-lg border max-w-md">
            <div className="relative">
                <Slider {...settings}>
                    {room.image.map((imgSrc, index) => (
                         <div key={index}>
                         <Image
                             src={imgSrc} 
                             alt={room.title}
                             className="rounded-lg object-cover w-full h-[300px]" 
                             width={720} 
                             height={300}  // Fixed height
                         />
                     </div>
                    ))}
                </Slider>

                {/* Overlay for Guest Favourite and Heart Icon */}
                <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center">
                    {/* Guest Favourite */}
                    {isGuestFavorite && (
                        <div className="bg-white text-black px-3 py-1 rounded-lg font-medium">
                            Guest Favourite
                        </div>
                    )}

                    {/* Heart Icon */}
                    <FiHeart  className="text-white cursor-pointer" />
                </div>
            </div>

            {/* Room details */}
            <div className="mt-4 p-4">
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold">{room.title}</h2>
                    <p className='flex items-center space-x-1'> <FaStar /> {room.ratings}</p>
                </div>
                <p className="text-gray-600">{room.location}</p>
                <p className="font-bold">${room.pricePerNight} <span className='font-normal'>night</span></p>
            </div>
        </div>
    );
};

export default Card;
