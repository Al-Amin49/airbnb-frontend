import nexiosInstance from '@/app/helpers/nexios.config';
import { TRooms } from '@/app/types/rooms.type';
import React from 'react';

const Cards = async () => {
    // Fetch the data from the API
    const response = await nexiosInstance.get<{data:TRooms[]}>("/rooms", {
        cache: "no-store",
    });
    const rooms = response.data ;
    return (
        <div>
            {rooms.data.map((room: TRooms) => (
                <div key={room._id}>
                    <h2>{room.title}</h2>
                    <p>{room.description}</p>
                    <p>Price: ${room.pricePerNight}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;
