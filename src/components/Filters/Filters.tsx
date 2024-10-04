import React, { useState } from "react";
import Modal from "./Modal";
import { TFiltersType } from "@/app/types/filters.type";

interface FiltersProps {
    applyFilters: (filters: TFiltersType) => void;
  }
const Filters = ({ applyFilters }: FiltersProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [bathrooms, setBathrooms] = useState<number | null>(null);
  const [beds, setBeds] = useState<number | null>(null);

  const handleApplyFilters = () => {
    applyFilters({
      priceMin,
      priceMax,
      bedrooms,
      bathrooms,
      beds,
    });
    setModalOpen(false); // Close the modal after applying filters
  };

  return (
    <div>
      <button className="border border-gray-300 p-2 rounded-lg " onClick={() => setModalOpen(true)}>Filters</button>
      <button className="ml-2 border border-gray-300 p-2 rounded-lg ">Display total before taxes</button>

      {/* Modal for Filters */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="grid gap-4">
          <div>
            <label>Price Min:</label>
            <input
              type="number"
              value={priceMin || ""}
              onChange={(e) => setPriceMin(Number(e.target.value))}
              className="border p-2 rounded w-full"
              placeholder="Minimum Price"
            />
          </div>
          <div>
            <label>Price Max:</label>
            <input
              type="number"
              value={priceMax || ""}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="border p-2 rounded w-full"
              placeholder="Maximum Price"
            />
          </div>
          <div>
            <label>Bedrooms:</label>
            <input
              type="number"
              value={bedrooms || ""}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              className="border p-2 rounded w-full"
              placeholder="Number of Bedrooms"
            />
          </div>
          <div>
            <label>Bathrooms:</label>
            <input
              type="number"
              value={bathrooms || ""}
              onChange={(e) => setBathrooms(Number(e.target.value))}
              className="border p-2 rounded w-full"
              placeholder="Number of Bathrooms"
            />
          </div>
          <div>
            <label>Beds:</label>
            <input
              type="number"
              value={beds || ""}
              onChange={(e) => setBeds(Number(e.target.value))}
              className="border p-2 rounded w-full"
              placeholder="Number of Beds"
            />
          </div>
          <button onClick={handleApplyFilters} className="bg-blue-500 text-white p-2 rounded">
            Apply Filters
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Filters;
