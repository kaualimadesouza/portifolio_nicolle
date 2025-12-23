import React from 'react';
import { Card } from './Card';

function PinterestCard() {
  return (
    <Card className="relative w-[300px] h-[300px] rounded-xl overflow-hidden group shadow-lg bg-white flex flex-col justify-between">
      <div className="flex flex-col h-full justify-between">
        {/* Top: Profile */}
        <div className="flex items-center justify-between px-5 pt-5">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/10456829?v=4"
                alt="Nicolle Marinho"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-black leading-tight text-base">Nicolle Marinho</div>
              <div className="text-xs text-gray-400">@nicollemarinho</div>
            </div>
          </a>
          <a href="https://pinterest.com/nicollemarinho" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" className="w-5 h-5" />
          </a>
        </div>
        {/* Post */}
        <div className="px-5 py-3 flex-1 flex items-center">
          <div className="text-sm text-black leading-relaxed">
            <span className="font-semibold">📌 New Pin:</span> Check out my latest inspiration board! <a href="https://pinterest.com/nicollemarinho" className="text-red-600 hover:underline">#inspiration</a> <a href="https://pinterest.com/nicollemarinho" className="text-red-600 hover:underline">#design</a>
          </div>
        </div>
        {/* Button */}
        <div className="px-5 pb-5">
          <a
            href="https://pinterest.com/nicollemarinho"
            className="flex items-center justify-between w-full border border-gray-200 rounded-xl py-2 px-4 bg-white hover:bg-gray-50 transition"
            style={{ textDecoration: 'none' }}
          >
            <span className="font-medium text-black text-sm">View on Pinterest</span>
            <span className="flex items-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default PinterestCard;
export { PinterestCard };
