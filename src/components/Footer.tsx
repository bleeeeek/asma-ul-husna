import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white text-center py-2 mt-6 shadow-lg">
      <div className="max-w-2xl mx-auto">
        <p className="mb-1 text-sm font-semibold">
          اَلْحَمْدُ لِلَّهِ عَلٰی كُلِّ نِعْمَةٍ وَ اَسْتَغْفِرُالله مِنْ كُلِّ ذَنْبٍ وَ اَسْئَلُهُ مِنْ كُلِّ خَيْرٍ وَ أَعُوذُ بِاللَّهِ مِنْ كُلِّ شَرٍّ
        </p>
        <p className="text-xs">
          Praise be to Allah for all the blessings. Oh Allah, Forgive all our sins, give us all that is good and keep us away from all that is bad.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 