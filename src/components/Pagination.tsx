import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className = "" }) => {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      scrollToTop();
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      scrollToTop();
      onPageChange(currentPage + 1);
    }
  };

  const paginationButton = "px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200";

  return (
    <div className={`flex justify-between items-center ${className}`}>
      <button 
        onClick={handlePrevious} 
        disabled={currentPage === 1} 
        className={paginationButton}
      >
        Previous
      </button>
      <span className="text-gray-600 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>
      <button 
        onClick={handleNext} 
        disabled={currentPage === totalPages} 
        className={paginationButton}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination; 