import { Card } from './Card';

const availabilityOptions = [
  { title: 'Find time for partnership', subtitle: 'Share availability to clipboard', color: 'blue' },
  { title: 'Find time for interview', subtitle: 'Share in New York (ET) time', color: 'orange' },
  { title: 'Find time for phone scre', subtitle: 'Share in London (ET) time', color: 'green' },
  { title: 'Find time for first pitch', subtitle: 'Find availability in 2 weeks', color: 'pink' },
];

function AvailabilityGrid() {
  return (
    <Card>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {availabilityOptions.map((option) => (
          <div 
            key={option.title}
            className={`p-3 rounded-lg bg-${option.color}-50 border border-${option.color}-100 text-xs text-gray-700`}
          >
            <p className="font-medium mb-1">{option.title}</p>
            <p className="text-gray-500">{option.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Card>
  );
}

export default AvailabilityGrid;
export { AvailabilityGrid };
