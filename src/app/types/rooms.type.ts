export type TRooms = {
    _id:string,
    location: string;
    category: string;
    title: string;
    from: string;
    to: string;
    pricePerNight: number;
    totalPrice: number;
    guests: number;
    bathrooms: number;
    bedrooms: number;
    beds: number;
    description: string;
    image: string[];
    ratings: number;
  };