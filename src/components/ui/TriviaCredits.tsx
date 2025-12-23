import Card from './Card';

function TriviaCredits() {
  return (
    <Card>
      <div className="flex flex-col h-full justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Trivia</p>
          <p className="text-lg font-normal text-black mb-4">Credits</p>
          <ul className="text-sm text-gray-500 list-disc pl-5">
            <li>Design: Nicolle</li>
            <li>Development: Nicolle</li>
            <li>Content: Nicolle</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default TriviaCredits;
export { TriviaCredits };
