
'use client'; 

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Cards from './Cards'; 

const CardsWrapper = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || 'default';

    return <Cards category={category} />; 
};

export default CardsWrapper;
