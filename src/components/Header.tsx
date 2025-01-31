import React from 'react';
import { Search } from 'lucide-react';
import logo from '../assets/logo/Logo_transparent_bg.png';
import ProgressBar from './ProgressBar';

interface HeaderProps {
  search: string;
  setSearch: (search: string) => void;
  likedCount: number;
  totalNames: number;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch, likedCount, totalNames }) => {
  const progress = totalNames > 0 ? (likedCount / totalNames) * 100 : 0;

  return (
    <header className="mb-8">
      <ProgressBar progress={progress} />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-500">
          Al-Asma ul-Husna
        </h1>
        <img src={logo} alt="Logo" className="h-16" />
      </div>
      <div className="text-center text-sm text-gray-600 mb-4">
        <p>
          Allah's Messenger (ﷺ) said, "Allah has ninety-nine Names, one-hundred less one; and he who memorized them all by heart will enter Paradise." To count something means to know it by heart.
        </p>
        <p className="font-semibold">Reference: Sahih al-Bukhari 7392</p>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none dark:bg-gray-800 dark:border-gray-700"
        />
      </div>
    </header>
  );
};

export default Header; 