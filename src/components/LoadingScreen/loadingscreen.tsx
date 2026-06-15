"use client";

import { FC, useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
  isLoading: boolean;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ onComplete, isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= 100) {
        clearInterval(interval);
        onComplete();
      }
      setProgress(currentProgress);
    }, 15);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  return (
    <div
      className={`fixed inset-0 h-screen w-screen flex items-center justify-center bg-black z-[9999] transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-white text-5xl font-bold">{progress}%</div>
    </div>
  );
};

export default LoadingScreen;
