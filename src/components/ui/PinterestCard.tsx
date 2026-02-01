import { Card } from './Card';

function PinterestCard() {
  return (
    <Card className="relative w-[328px] h-[328px] rounded-xl overflow-hidden shadow-lg bg-white p-4 flex flex-col justify-between">
      {/* Podcast style card */}
      <div className="flex gap-3 mb-3">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
          <span className="text-white font-bold text-xs text-center leading-tight px-1">DESIGN<br/>TALKS</span>
        </div>
        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>
      {/* Podcast info */}
      <div className="mb-3">
        <div className="font-semibold text-black text-sm">Design como carreira?</div>
        <div className="text-xs text-gray-500">Podcast de Design</div>
      </div>
      {/* Player controls */}
      <div className="flex items-center justify-between text-gray-400">
        <button className="hover:text-gray-600 transition">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>
        <button className="hover:text-gray-600 transition">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
        <button className="hover:text-gray-600 transition">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </button>
        <button className="hover:text-gray-600 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m-2.828-9.9a9 9 0 000 12.728"/>
          </svg>
        </button>
      </div>
    </Card>
  );
}

export default PinterestCard;
export { PinterestCard };
