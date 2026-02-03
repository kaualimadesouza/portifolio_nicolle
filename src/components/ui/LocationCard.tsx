import { Card } from './Card';

function LocationCard() {
  return (
    <Card className="p-6 h-full flex flex-col justify-between">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <span className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">Localizado em</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
          São Paulo, Brasil
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          UTC-3 (BRT)
        </p>
      </div>
    </Card>
  );
}

export default LocationCard;
export { LocationCard };
