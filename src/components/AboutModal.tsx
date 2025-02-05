import React from 'react';
import { Info } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="space-y-8">
          <div className="flex items-center space-x-3 border-b border-emerald-100 dark:border-emerald-800 pb-4">
            <Info className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400">About Al-Asma ul-Husna</h2>
          </div>
          
          <div className="text-gray-600 dark:text-gray-300 space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed">
                The journey of memorizing Allah's names is a path to deepening our connection with our Creator. 
                Each name is a gateway to understanding His infinite perfection and mercy. As we learn and 
                reflect upon these beautiful names, our love for Allah naturally grows, leading to a stronger 
                desire to worship and please Him. As Surah Ikhlas beautifully illustrates, Allah's perfection 
                encompasses His Essence, Names, Attributes, and Actions – unique and unmatched in every way.
              </p>

              <p className="leading-relaxed">
                While we commonly refer to the 99 Names (Al-Asma ul-Husna), Islamic scholars note that 
                Allah's beautiful names extend beyond this number. The Qur'an and authentic Sunnah together 
                reveal over a hundred divine names, each offering unique insights into the majesty and 
                mercy of our Creator.
              </p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-400 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center mr-3 text-emerald-600 dark:text-emerald-400">1</span>
                Understanding Allah's Names and Attributes
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                It means affirming the Names and Attributes which Allah has affirmed for Himself in a manner befitting His majesty:
              </p>
              <ul className="list-none space-y-3">
                {[
                  'Without Tahrif (distortion of the meaning)',
                  'Without Ta`til (negation of the meaning or function of Allah\'s Attributes)',
                  'Without Takyif (descriptive designation of Allah\'s Attributes)',
                  'Without Tamthil (likening Allah\'s Attributes to those of His Creation)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-400 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center mr-3 text-emerald-600 dark:text-emerald-400">2</span>
                Ibn al-Qayyim mentioned three levels of enumerating the names of Allah:
              </h3>
              
              <ol className="list-none space-y-3">
                {[
                  'The first level, to memorize their words.',
                  'The second level, to understand their meanings and implications.',
                  "The third level, to make du'aa (i.e., supplicate) to Allah with them, this encompasses both supplication of worship and supplication of request."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center mr-3 text-emerald-600 dark:text-emerald-400 text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal; 