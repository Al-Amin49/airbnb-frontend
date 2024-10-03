"use client"
import { TRooms } from '@/app/types/rooms.type';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';  // Heart icon from react-icons

export type TCardProps = {
    room: TRooms;
};

const Card = ({ room }: TCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = room.image.length;

    const isGuestFavorite = room.ratings >= 4.9;

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    return (
        <div className=" rounded-lg border max-w-md"> {/* Card container */}
            <div className="relative"> {/* Image slider container */}
                {/* Image */}
                <Image
                    src={room?.image[currentImageIndex] || "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720"} 
                    alt={room.title}
                    className="rounded-lg object-cover" 
                    width={720} 
                    height={480} 
                />

                {/* Overlay for Guest Favourite and Heart Icon */}
                <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center">
                    {/* Guest Favourite */}
                    {isGuestFavorite && (
                        <div className="bg-white text-black px-3 py-1 rounded-lg font-medium">
                            Guest Favourite
                        </div>
                    )}

                    {/* Heart Icon */}
                    <FaHeart className="text-white cursor-pointer" />
                </div>

                {/* Previous button */}
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
                >
                    ‹
                </button>
                
                {/* Next button */}
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
                >
                    ›
                </button>
            </div>

            {/* Room details */}
            <div className="mt-4 p-4">
                <h2 className="text-xl font-semibold">{room.title}</h2>
                <p className="text-gray-600">{room.location}</p>
                <p>{room.from} to {room.to}</p>
                <p className="font-bold">Price: ${room.pricePerNight} / night</p>
                <p>Rating: {room.ratings} / 5</p>
            </div>
        </div>
    );
};

export default Card;
