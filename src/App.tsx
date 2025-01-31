import React, { useState, useEffect } from 'react';
import { names } from './data/names';
import { NameCard } from './components/NameCard';
import Pagination from './components/Pagination';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 33;

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Retrieve progress from local storage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
      setFavorites(JSON.parse(savedProgress));
    }
  }, []);

  // Filter names based on search input
  const filteredNames = names.filter(name =>
    name.transliteration.toLowerCase().includes(search.toLowerCase()) ||
    name.english.toLowerCase().includes(search.toLowerCase()) ||
    name.meaning.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate total pages based on filtered names
  const totalPages = Math.ceil(filteredNames.length / pageSize);

  // Calculate paginated names based on filtered results
  const paginatedNames = filteredNames.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleFavorite = (number: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(number)
        ? prev.filter(n => n !== number)
        : [...prev, number];

      // Save progress to local storage
      localStorage.setItem('progress', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const likedCount = favorites.length;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header 
          search={search} 
          setSearch={setSearch} 
          likedCount={likedCount}
          totalNames={names.length}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedNames.map((name) => (
            <NameCard
              key={name.number}
              {...name}
              isFavorite={favorites.includes(name.number)}
              onToggleFavorite={() => toggleFavorite(name.number)}
            />
          ))}
        </div>

        {filteredNames.length > 0 ? (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
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