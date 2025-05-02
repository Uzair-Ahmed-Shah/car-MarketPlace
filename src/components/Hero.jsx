import React from 'react';
import Search from './Search';

function Hero() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero1.png')" }}
      />

    <div
    className="absolute inset-0 z-10"
    style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%)"
    }}
    />
      <div className="relative z-20 flex flex-col items-center px-4 h-full justify-center text-center text-white">
        <h1 className="text-8xl font-extrabold drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mb-2">
          Find Your Perfect Drive
        </h1>
        <p className="text-[2rem] font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mb-20">
          Shop new, used, and certified cars — all in one place.
        </p>
        <Search />
      </div>
    </div>
  );
}

export default Hero;
