import React, { useState, useEffect } from 'react';
import { names, getLikedNames } from './data/names';
import { NameCard } from './components/NameCard';
import Pagination from './components/Pagination';
import Header from './components/Header';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-gray-50 relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header 
          search={search} 
          setSearch={setSearch} 
          likedCount={likedCount}
          totalNames={names.length}
        />

        {filteredNames.length > 0 ? (
          <>
            <div className="my-6">
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {paginatedNames.map((name) => (
                <NameCard
                  key={name.number}
                  name={name}
                  isFavorite={favorites.includes(name.number)}
                  onToggleFavorite={() => handleToggleFavorite(name.number)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center mt-8 text-gray-600">
            No results found for "{search}"
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;