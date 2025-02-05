import React, { useState } from 'react';
import InfoModal from './InfoModal';
import { toggleNameLike } from '../data/names';

interface NameCardProps {
  name: {
    number: number;
    arabic: string;
    transliteration: string;
    english: string;
    reference: {
      arabic: string;
      english: string;
      citation: string;
    };
    meaning: {
      arabic: string;
      english: string;
    };
    isLiked?: boolean;
  };
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const NameCard: React.FC<NameCardProps> = ({ name, isFavorite, onToggleFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLikeClick = () => {
    toggleNameLike(name.number);
    onToggleFavorite();
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 relative">
        {/* Number badge */}
        <span className="absolute top-4 left-4 bg-[#00513B] text-white text-sm font-medium px-3 py-1 rounded-full">
          {name.number}
        </span>

        {/* Favorite button */}
        <button
          onClick={handleLikeClick}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          <svg
            className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center mt-8 space-y-3">
          <h3 className="text-3xl font-arabic mb-2" dir="rtl">{name.arabic}</h3>
          <p className="text-xl font-semibold text-emerald-800">{name.transliteration}</p>
          <p className="text-gray-600">{name.english}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 text-emerald-800 hover:text-emerald-900 font-medium inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <span>View Details</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>

      <InfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
      />
    </>
  );
};