import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
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
  };
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, name }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full mx-4 p-4 sm:p-6 relative shadow-2xl max-h-[80vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-4xl font-arabic mb-2" dir="rtl">{name.arabic}</p>
          <h2 className="text-2xl font-semibold text-green-600">{name.transliteration}</h2>
          <p className="text-gray-600 text-sm">{name.english}</p>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Meaning Section */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-sm uppercase tracking-wider text-green-800 font-semibold mb-2">
              Meaning
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              {name.meaning.english}
            </p>
            <p className="text-base font-arabic text-right leading-relaxed" dir="rtl">
              {name.meaning.arabic}
            </p>
          </div>

          {/* Reference Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm uppercase tracking-wider text-gray-600 font-semibold mb-2 flex items-center justify-between">
              Reference
              <span className="text-xs normal-case font-normal text-gray-500">
                {name.reference.citation}
              </span>
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              {name.reference.english}
            </p>
            <p className="text-base font-arabic text-right leading-relaxed" dir="rtl">
              {name.reference.arabic}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal; 