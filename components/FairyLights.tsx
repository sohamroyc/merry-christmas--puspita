
import React from 'react';

const FairyLights: React.FC = () => {
  const lights = Array.from({ length: 15 });
  const colors = ['#fde68a', '#f87171', '#34d399', '#60a5fa'];

  return (
    <div className="fixed top-0 left-0 w-full z-[20] flex justify-around pointer-events-none">
      {lights.map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-[1px] h-4 bg-stone-400/30"></div>
          <div 
            className="w-2 h-2 rounded-full animate-pulse shadow-lg"
            style={{ 
              backgroundColor: colors[i % colors.length],
              animationDelay: `${i * 0.3}s`,
              boxShadow: `0 0 10px ${colors[i % colors.length]}`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FairyLights;
