import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E121B]">
      <div className="text-center">
        <div className="relative w-20 h-20 mb-8 mx-auto">
          <div className="absolute inset-0 border-2 border-cyan-400 rounded-full opacity-20 animate-ping"></div>
          <div
            className="absolute inset-2 border-2 border-blue-400 rounded-full opacity-40 animate-ping"
            style={{ animationDelay: '0.3s' }}
          ></div>
          <div
            className="absolute inset-4 border-2 border-purple-400 rounded-full opacity-60 animate-ping"
            style={{ animationDelay: '0.6s' }}
          ></div>
          <div className="absolute inset-6 w-8 h-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-spin"></div>

          {/* Holographic grid lines */}
          <div className="absolute inset-0 border border-cyan-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent"></div>
        </div>
        <h2 className="text-[#C0D5FF] text-xl font-light tracking-wider">
          INITIALIZING
        </h2>
      </div>
    </div>
  );
};

export default Loader;
