import React from 'react';
import { Heart } from 'lucide-react';

interface NameCardProps {
  number: number;
  arabic: string;
  transliteration: string;
  english: string;
  meaning: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const NameCard: React.FC<NameCardProps> = ({
  number,
  arabic,
  transliteration,
  english,
  meaning,
  isFavorite = false,
  onToggleFavorite
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
          {number}
        </span>
        <button
          onClick={onToggleFavorite}
          className="text-gray-400 hover:text-rose-500 transition-colors duration-200"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-3xl font-arabic mb-2" dir="rtl">{arabic}</h2>
        <h3 className="text-xl font-semibold text-emerald-700 mb-1">{transliteration}</h3>
        <p className="text-lg font-medium text-gray-700 mb-1">{english}</p>
        <p className="text-sm text-gray-600">{meaning}</p>
      </div>
    </div>
  );
};