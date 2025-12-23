import { Card } from './Card';

interface KeyboardShortcutProps {
  shortcut: string;
}

function KeyboardShortcut({ shortcut }: KeyboardShortcutProps) {
  return (
    <Card className="p-8 flex items-center justify-center">
      <div className="text-6xl font-bold text-black">
        {shortcut}
      </div>
    </Card>
  );
}

export default KeyboardShortcut;
export { KeyboardShortcut };
