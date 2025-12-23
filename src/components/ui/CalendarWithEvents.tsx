import Card from './Card';

const events = [
  {
    title: 'Daily Standup',
    time: '10:00am – 11:00am',
    duration: '1 hour',
    color: 'blue'
  },
  {
    title: '1-on-1 Interview',
    time: '11:00am – 12:00pm',
    duration: '1 hour',
    color: 'green'
  }
];

function CalendarWithEvents() {
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
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-gray-800">command_dot</span>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Inbox, meet Calendar</h2>
        <div className="mb-4">
          <p className="text-xs uppercase text-gray-500 mb-2">Calendar</p>
          <p className="text-sm font-medium text-gray-900">Monday, Nov 21st</p>
        </div>
        <div className="grid grid-cols-5 gap-1 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu'].map((day, idx) => (
            <div key={day} className="text-center">
              <p className="text-xs text-gray-500">{day}</p>
              <p className="text-xs text-gray-900">{20 + idx}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {events.map((event) => (
            <div 
              key={event.title}
              className={`bg-${event.color}-50 rounded-lg p-3 border-l-4 border-${event.color}-400`}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-900">{event.title}</p>
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              </div>
              <p className="text-xs text-gray-600">{event.time}</p>
              <p className="text-xs text-gray-500 mt-1">{event.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default CalendarWithEvents;
export { CalendarWithEvents };
