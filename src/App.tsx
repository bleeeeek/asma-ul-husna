import React, { useState, useEffect } from 'react';
import { names, getLikedNames } from './data/names';
import { NameCard } from './components/NameCard';
import Pagination from './components/Pagination';
import Header from './components/Header';
import Footer from './components/Footer';
import { QuizModal } from './components/QuizModal';

interface Name {
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
}

function App() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 33;
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const likedNames = getLikedNames();
    setFavorites(likedNames);
  }, []);

  // Save progress to local storage whenever favorites change
  useEffect(() => {
    console.log('Saving progress:', favorites);
    localStorage.setItem('progress', JSON.stringify(favorites));
  }, [favorites]);

  // Update favorites state when a name is liked/unliked
  const handleToggleFavorite = (nameNumber: number) => {
    setFavorites(getLikedNames()); // Refresh favorites from localStorage
  };

  const likedCount = favorites.length;

  // Filter names based on search
  const filteredNames = names.filter(name =>
    name.arabic.includes(search) ||
    name.transliteration.toLowerCase().includes(search.toLowerCase()) ||
    name.english.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredNames.length / pageSize);

  // Get paginated names
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedNames = filteredNames.slice(startIndex, startIndex + pageSize);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header 
          search={search} 
          setSearch={setSearch}
          likedCount={favorites.length}
          totalNames={names.length}
        />

        <div className="mt-8">
          {filteredNames.length > 0 ? (
            <>
              {/* Top pagination */}
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
                className="mb-6"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedNames.map((name) => (
                  <NameCard
                    key={name.number}
                    name={name}
                    isFavorite={favorites.includes(name.number)}
                    onToggleFavorite={() => handleToggleFavorite(name.number)}
                  />
                ))}
              </div>

              {/* Bottom pagination */}
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
                className="mt-8"
              />

              {/* Quiz Button */}
              <div className="flex justify-center mt-8 mb-6">
                <button
                  onClick={() => setIsQuizModalOpen(true)}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                    />
                  </svg>
                  <span className="ml-2">Test Your Knowledge</span>
                </button>
              </div>

              <QuizModal 
                isOpen={isQuizModalOpen} 
                onClose={() => setIsQuizModalOpen(false)}
                likedNames={names.filter(name => favorites.includes(name.number))}
              />
            </>
          ) : (
            <div className="text-center mt-8 text-gray-600">
              No results found for "{search}"
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;