import React from 'react';

function CareersTile() {
  return (
    <div className="relative w-[330px] h-[330px] rounded-2xl overflow-hidden group shadow-lg bg-white">
      <img
        src="/careers-bg.jpg"
        alt="Careers Background"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
      <div className="relative z-10 flex flex-col h-full justify-end p-8">
        <div className="mb-4">
          <img src="/careers-icon.svg" alt="Careers Icon" className="w-12 h-12 mb-2" />
          <h3 className="text-2xl font-bold text-white mb-1">Careers</h3>
          <p className="text-lg text-white/80">Join our team and build the future.</p>
        </div>
        <a
          href="#apply"
          className="inline-block px-6 py-2 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default CareersTile;
export { CareersTile };
