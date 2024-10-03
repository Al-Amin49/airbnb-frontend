import nexiosInstance from '@/app/helpers/nexios.config';
import { TRooms } from '@/app/types/rooms.type';
import React from 'react';
import Card from './Card';
import Container from '../Container/Container';

type TCardsProps= {
    category: string; // Add category prop
}

const Cards = async ({category}:TCardsProps) => {

    // Fetch the data from the API
    const response = await nexiosInstance.get<{data:TRooms[]}>(`/rooms?category=${category}`, {
        cache: "no-store",
    });
    const rooms = response.data ;
    console.log(rooms)
    return (
     <Container>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center mt-10' >
            {rooms.data.map((room: TRooms) => (
               <Card key={room._id} room={room}/>
            ))}
        </div>
     </Container>
    );
};

export default Cards;
