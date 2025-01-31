import React from 'react';

interface ProgressBarProps {
  progress: number; // Progress percentage
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full mb-4">
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-emerald-500 h-full rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-right text-sm font-medium text-emerald-700">
        {progress.toFixed(0)}% Completed
      </div>
    </div>
  );
};

export default ProgressBar; 