'use client';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Link from 'next/link';
import { useRef } from 'react';
import { Category } from '@/types/GeneralTypes';
import { CategorySliderProps } from "@/types/GeneralTypes";
import Image from "next/image"


export default function CategorySlider({ categories }: CategorySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Categorías</h2>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <GoArrowLeft size={24} />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <GoArrowRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar"
        >
          {categories.map(category => (
            <Link 
              key={category.nombre}
              href={`/categoria/${category.nombre}`}
              className="min-w-[200px] flex-shrink-0 p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={category.imagen}
                  alt={category.nombre}
                  className="w-full h-48 object-cover"
                  width={200}
                  height={200}
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.nombre.charAt(0).toUpperCase() + category.nombre.slice(1)}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}