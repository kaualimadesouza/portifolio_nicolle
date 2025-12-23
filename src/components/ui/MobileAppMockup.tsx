import Card from './Card';

const restaurants = [
  {
    name: "Joe's PIZZA",
    type: 'Italian • Pizza',
    details: '10-15 min • $1.99 Delivery • ☆4.9'
  },
  {
    name: 'Katsuei',
    type: 'Japanese • Sushi',
    details: '20-25 min • $2.99 Delivery • ☆4.8'
  }
];

function MobileAppMockup() {
  return (
    <Card>
      <div className="bg-gray-50 rounded-3xl p-4 border-2 border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-gray-800">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-xs text-gray-600 mb-1">Delivering to</p>
          <p className="text-sm font-bold text-gray-900">Brooklyn</p>
        </div>
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Search by restaurant or entrée" 
            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm"
          />
        </div>
        <div className="mb-4">
          <p className="text-sm font-bold text-gray-900 mb-2">Discover</p>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 rounded-md bg-red-500 text-white text-xs">Trivia</div>
            <div className="px-3 py-1.5 rounded-md bg-gray-200 text-gray-700 text-xs">Express</div>
            <div className="px-3 py-1.5 rounded-md bg-gray-200 text-gray-700 text-xs">Japanese</div>
          </div>
        </div>
        <div className="space-y-3">
          {restaurants.map((restaurant) => (
            <div key={restaurant.name} className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-2"></div>
              <p className="font-medium text-sm text-gray-900">{restaurant.name}</p>
              <p className="text-xs text-gray-600">{restaurant.type}</p>
              <p className="text-xs text-gray-600">{restaurant.details}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default MobileAppMockup;
export { MobileAppMockup };
