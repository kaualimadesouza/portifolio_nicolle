import Card from './Card';

function TextCard() {
  return (
    <Card>
      <div className="flex flex-col h-full justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Text Card</p>
          <p className="text-lg font-normal text-black mb-4">Some text content here.</p>
          <p className="text-sm text-gray-500">This is a simple text card for demonstration purposes.</p>
        </div>
      </div>
    </Card>
  );
}

export default TextCard;
export { TextCard };
