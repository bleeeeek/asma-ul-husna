import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white text-center py-2 mt-6 shadow-lg">
      <div className="max-w-2xl mx-auto">
        <p className="mb-1 text-sm font-semibold">
         وَلِلَّهِ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ فَٱدْعُوهُ بِهَا ۖ وَذَرُوا۟ ٱلَّذِينَ يُلْحِدُونَ فِىٓ أَسْمَـٰٓئِهِۦ ۚ سَيُجْزَوْنَ مَا كَانُوا۟ يَعْمَلُونَ
        </p>
        <p className="text-xs mb-1">
          Allah has the Most Beautiful Names. So call upon Him by them, and keep away from those who abuse His Names. They will be punished for what they used to do.
        </p>
        <p className="text-xs italic">
          Surah Al-A'raf [7:180]
        </p>
      </div>
    </footer>
  );
};

export default Footer; 

