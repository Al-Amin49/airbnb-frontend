"use client"
import React, { useState, useEffect } from "react";
import Container from "@/components/Container/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
import Filters from "../Filters/Filters";
import { useSearchParams } from "next/navigation"; 
import { TRooms } from "@/app/types/rooms.type";
import Card from "../Cards/Card";



const Categories = () => {
  const [rooms, setRooms] = useState<TRooms[]>([]); // Store the rooms data
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); 
  console.log('category', category)

  // Fetch rooms based on selected category
  const fetchRooms = async (category: string | null) => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/rooms${category ? `?category=${category}` : ""}`);
      const data = await res.json();
      console.log('data', data)
      setRooms(data.data); 
    } catch (error) {
      console.error("Failed to fetch rooms:", error);
    }
  };

  // Fetch rooms when the component mounts or the category changes
  useEffect(() => {
    fetchRooms(category);
  }, [category]); 

  return (
    <div
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Container>
        <div className="pt-10 flex items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <CategoryBox key={item.label} label={item.label} img={item.img} />
          ))}
          <Filters />
        </div>

        {/* Display fetched rooms */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.length > 0 ? (
            rooms.map((room) => (
             <Card key={room._id} room={room}></Card>
            ))
          ) : (
            <p>No rooms available for this category.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
