import { Card } from './Card';

function AvailabilityCard() {
  return (
    <Card className="p-6 h-full flex flex-col justify-between">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
        </div>
        <span className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">Status</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
          Disponivel
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Para projetos freelance
        </p>
      </div>
    </Card>
  );
}

export default AvailabilityCard;
export { AvailabilityCard };
