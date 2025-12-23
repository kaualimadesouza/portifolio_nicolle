import { Card } from './Card';

const weekDays = [
  { day: 'Sun', date: 20, active: false },
  { day: 'Mon', date: 21, active: true },
  { day: 'Tue', date: 22, active: false },
  { day: 'Wed', date: 23, active: false },
  { day: 'Thu', date: 24, active: false },
  { day: 'Fri', date: 25, active: false },
  { day: 'Sat', date: 26, active: false }
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function CalendarCard() {
  return (
    <Card>
      <div className="mb-4">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Availability Calendar</p>
        <p className="text-lg font-normal text-black">Monday, Nov 21st</p>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-6">
        {weekDays.map((item) => (
          <div key={item.day} className={`text-center py-2 rounded-lg ${item.active ? 'bg-black/6' : ''}`}>
            <p className={`text-sm ${item.active ? 'text-black font-normal' : 'text-gray-400'}`}>{item.day}</p>
            <p className={`text-sm ${item.active ? 'text-black font-normal' : 'text-gray-400'}`}>{item.date}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Days Of The Week</p>
        <div className="flex gap-2">
          {daysOfWeek.map((day, idx) => (
            <div key={day} className={`px-3 py-1.5 rounded-lg text-sm ${idx >= 1 && idx <= 3 ? 'bg-black/6' : ''}`}>
              <span className={idx >= 1 && idx <= 3 ? 'text-black' : 'text-gray-400'}>{day}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Duration</p>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-black">60 minutes</span>
        </div>
      </div>
    </Card>
  );
};
