import Card from './Card';

const workspaceItems = [
  { name: 'DotOS Notes', active: true, icon: 'notion' },
  { name: '1-on-1 Meeting Notes', active: false, icon: 'calendar' },
  { name: 'Project Timeline', active: false, icon: 'chart' },
  { name: 'Tasks', active: false, icon: 'check' }
];

const getIconBgColor = (icon: string) => {
  switch (icon) {
    case 'notion': return 'bg-purple-500';
    case 'calendar': return 'bg-blue-500';
    case 'chart': return 'bg-orange-500';
    case 'check': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
};

function NotionWorkspace() {
  return (
    <Card>
      <div className="flex flex-col h-full justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Workspace</p>
          <p className="text-lg font-normal text-black mb-4">Notion</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-gray-500">Active</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <img src="/notion-logo.svg" alt="Notion Logo" className="w-6 h-6" />
          <span className="text-sm text-black">notion.so/nicolle</span>
        </div>
      </div>
    </Card>
  );
}

export default NotionWorkspace;
export { NotionWorkspace };
