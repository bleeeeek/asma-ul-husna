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

  const filteredNames = names.filter(name =>
    name.transliteration.toLowerCase().includes(search.toLowerCase()) ||
    name.english.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNames.length / pageSize);
  const paginatedNames = filteredNames.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    // Retrieve progress from local storage
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
      setFavorites(JSON.parse(savedProgress));
    }
  }, []);

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

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;