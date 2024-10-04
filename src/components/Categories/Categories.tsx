"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/Container/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
import Filters from "../Filters/Filters";
import { useSearchParams } from "next/navigation";
import { TRooms } from "@/app/types/rooms.type";
import Card from "../Cards/Card";
import CardSkeleton from "../Cards/CardSkeleton";
import { TFiltersType } from "@/app/types/filters.type";

const Categories = () => {
  const [rooms, setRooms] = useState<TRooms[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const [filters, setFilters] = useState<TFiltersType>({
    priceMin: null,
    priceMax: null,
    bedrooms: null,
    bathrooms: null,
    beds: null,
  });

  // Fetch rooms based on selected category
  const fetchRooms = async (category: string | null) => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
     // Append category and filters
     if (category) queryParams.append("category", category);
     if (filters.priceMin !== null) queryParams.append("priceMin", filters.priceMin.toString());
     if (filters.priceMax !== null) queryParams.append("priceMax", filters.priceMax.toString());
     if (filters.bedrooms !== null) queryParams.append("bedrooms", filters.bedrooms.toString());
     if (filters.bathrooms !== null) queryParams.append("bathrooms", filters.bathrooms.toString());
     if (filters.beds !== null) queryParams.append("beds", filters.beds.toString());
      const res = await fetch(
        `https://airbnb-backend-phi.vercel.app/api/v1/rooms?${queryParams.toString()}`
      );
      const data = await res.json();
      setRooms(data.data);
    } catch (error) {
      console.error("Failed to fetch rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch rooms when the component mounts or the category changes
  useEffect(() => {
    fetchRooms(category);
  }, [category]);

  // Function to handle filter application
  const applyFilters = (newFilters: TFiltersType) => {
    setFilters(newFilters);
  };

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
          <Filters applyFilters={applyFilters} />
        </div>

        {/* Display fetched rooms or show skeleton while loading */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Show skeleton placeholders when loading
            [...Array(6)].map((_, index) => <CardSkeleton key={index} />)
          ) : rooms?.length > 0 ? (
            rooms?.map((room) => <Card key={room._id} room={room} />)
          ) : (
            <p>No rooms available for this category.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
