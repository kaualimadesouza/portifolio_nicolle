import Card from './Card';

const relatedItems = [
  { name: 'Amari Jones', text: 'did you read that notion doc we just got sent?', icon: 'avatar' },
  { name: 'DotOS Design', text: 'https://www.figma.com/dot-os-design', icon: 'figma' },
  { name: 'DotOS Pitch Deck', text: 'dot-os-deck.pdf', icon: 'pdf' },
  { name: 'The Browser Company', text: 'https://thebrowser.company', icon: 'browser' }
];

const getIconBgColor = (icon: string) => {
  switch (icon) {
    case 'avatar': return 'bg-gray-300';
    case 'figma': return 'bg-purple-200';
    case 'pdf': return 'bg-red-200';
    case 'browser': return 'bg-blue-200';
    default: return 'bg-gray-300';
  }
};

function FeedPanel() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-xs">•</span>
          <span className="text-black font-medium">Feed</span>
          <span className="text-red-500 text-xs opacity-40">•</span>
          <span className="text-black font-medium opacity-40">Paste</span>
          <span className="text-red-500 text-xs opacity-40">•</span>
          <span className="text-black font-medium opacity-40">Actions</span>
          <span className="text-red-500 text-xs opacity-40">•</span>
          <span className="text-black font-medium opacity-40">Updates</span>
          <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">5</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Release ⌘ to open</span>
          <span>Move ↑↓</span>
        </div>
      </div>
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/19">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
          <div className="w-14 h-14 rounded-lg bg-indigo-100 flex items-center justify-center">
            <div className="w-8 h-8 rounded bg-indigo-500"></div>
          </div>
          <div className="flex-1">
            <p className="font-medium text-black">DotOS Notes</p>
            <p className="text-gray-600 text-sm">https://www.notion.so/dot-os-notes</p>
          </div>
        </div>
        <div>
          <p className="text-gray-600 font-medium text-sm mb-3">Related</p>
          <div className="space-y-2">
            {relatedItems.map((item) => (
              <div key={item.name} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className={`w-10 h-10 rounded-lg ${getIconBgColor(item.icon)}`}></div>
                <div className="flex-1">
                  <p className="font-medium text-black text-sm">{item.name}</p>
                  <p className="text-gray-600 text-xs">{item.text}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FeedPanel;
export { FeedPanel };
