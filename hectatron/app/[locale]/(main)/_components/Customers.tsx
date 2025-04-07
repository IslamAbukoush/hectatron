'use client'

import { useState } from "react";
import { CustomersBlockProps } from "@/lib/types/CustomersBlockProps";
import CustomersBLock from "./CustomersBLock";
import { twMerge } from "tailwind-merge";

const testimonials: CustomersBlockProps[] = [
  {
    src: "/images/testimonial1.png",
    alt: "Stephen Brekke",
    title: "Stephen Brekke",
    position: "Legacy Integration Producer",
    description:
      "If you want real marketing that works and effective implementation - mobile app's got you covered.",
  },
  {
    src: "/images/testimonial2.png",
    alt: "Stephen Brekke",
    title: "Stephen Brekke",
    position: "Legacy Integration Producer",
    description:
      "If you want real marketing that works and effective implementation - mobile app's got you covered.",
  },
  {
    src: "/images/testimonial1.png",
    alt: "Stephen Brekke",
    title: "Stephen Brekke",
    position: "Legacy Integration Producer",
    description:
      "If you want real marketing that works and effective implementation - mobile app's got you covered.",
  },
  {
    src: "/images/testimonial1.png",
    alt: "John Doe",
    title: "John Doe",
    position: "Marketing Specialist",
    description:
      "If you want real marketing that works and effective implementation - mobile app's got you covered.",
  },
  {
    src: "/images/testimonial2.png",
    alt: "Jane Smith",
    title: "Jane Smith",
    position: "UX Designer",
    description:
      "If you want real marketing that works and effective implementation - mobile app's got you covered.",
  },
];

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="px-[100px] mt-[150px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-6 items-start justify-center my-[10px]">
          <h1 className="text-gradient text-6xl text-start">
            See What Customers Say
          </h1>
          <p className="text-xl text-white/60 max-w-[70%] text-start">
            We design and develop high-quality, custom websites that enhance your
            brand and drive results.
          </p>
        </div>
        <div className="flex gap-10 text-white font-semibold text-lg">
          <button
            onClick={handlePrevious}
            className="bg-[#FF7043] border-1 border-white/40 py-2 rounded-[8px] w-[140px] text-center items-center hover:bg-[#FF8C69] transition-colors"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#1A1A32] border-1 border-white/40 py-2 rounded-[8px] w-[140px] text-center items-center hover:bg-[#252544] transition-colors"
          >
            Next
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-20 mt-16 transition-all duration-500">
        {getCurrentItems().map((item, index) => (
          <div 
            key={index} 
            className="transform transition-all duration-500 hover:scale-105"
          >
            <CustomersBLock {...item} />
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-2 mt-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentPage(index)}
            className={twMerge(
              "w-5 h-5 rounded-full cursor-pointer transition-all duration-300",
              index === currentPage ? "bg-[#FF7043]" : "bg-gray-500 hover:bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;