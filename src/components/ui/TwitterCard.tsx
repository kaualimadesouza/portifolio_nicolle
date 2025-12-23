import React from 'react';
import { Card } from './Card';

function TwitterCard() {
  return (
    <Card className="relative w-[300px] h-[300px] rounded-xl overflow-hidden group shadow-lg bg-white flex flex-col justify-between">
      <div className="flex flex-col h-full justify-between">
        {/* Top: Profile */}
        <div className="flex items-center justify-between px-2 pt-5">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/68434f48edd1cdb4c1988419_marco.avif"
                alt="Marco Cornacchia"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-black leading-tight text-base">Nicolle Marinho</div>
              <div className="text-xs text-gray-400">@nicollemarinho</div>
            </div>
          </a>
          <a href="https://twitter.com/marcofyi" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-gray-200 transition">
            <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/630d83f5a3b284176ffe8b1b_twitter-icon-min.png" alt="Twitter" className="w-5 h-5" />
          </a>
        </div>
        {/* Tweet */}
        <div className="px-5 py-3 flex-1 flex items-center">
          <div className="text-sm text-black leading-relaxed">
            cooking up • prev{' '}
            <a href="https://x.com/vercel" className="text-sky-600 hover:underline">@vercel</a>{' '}
            <a href="https://x.com/v0" className="text-sky-600 hover:underline">@v0</a>{' '}
            <a href="https://twitter.com/figma" className="text-sky-600 hover:underline">@figma</a>{' '}
            <a href="https://twitter.com/diagram" className="text-sky-600 hover:underline">@diagram</a>
          </div>
        </div>
        {/* Button */}
        <div className="px-5 pb-5">
          <a
            href="https://twitter.com/marcofyi"
            className="flex items-center justify-between w-full border border-gray-200 rounded-xl py-2 px-4 bg-white hover:bg-gray-50 transition"
            style={{ textDecoration: 'none' }}
          >
            <span className="font-medium text-black text-sm">Read mid tweets</span>
            <span className="flex items-center">
              <img
                src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg"
                alt="→"
                className="w-4 h-4"
              />
              <img
                src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62fab2491b44f7775b53be80_arrow-hover.svg"
                alt="→"
                className="w-4 h-4 ml-1 hidden group-hover:inline"
              />
            </span>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default TwitterCard;
export { TwitterCard };
