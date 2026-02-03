import { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'contact';
}

const messages: Message[] = [
  { id: 1, text: "Hey! 👋", sender: 'user' },
  { id: 2, text: "Hi! How can I help you?", sender: 'contact' },
  { id: 3, text: "I'd love to work with you!", sender: 'user' },
  { id: 4, text: "That sounds great! Let's connect 💜", sender: 'contact' },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 bg-[#e5e5ea] dark:bg-zinc-700 rounded-2xl rounded-bl-sm px-4 py-3 w-fit">
      <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-typing-1"></span>
      <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-typing-2"></span>
      <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-typing-3"></span>
    </div>
  );
}

function ChatInterface() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showDelivered, setShowDelivered] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const showNextMessage = () => {
      if (currentIndex < messages.length) {
        const message = messages[currentIndex];

        if (message.sender === 'contact') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, message]);
            currentIndex++;
            setTimeout(showNextMessage, 800);
          }, 1200);
        } else {
          setVisibleMessages(prev => [...prev, message]);
          currentIndex++;
          if (currentIndex === messages.length) {
            setTimeout(() => setShowDelivered(true), 300);
          } else {
            setTimeout(showNextMessage, 800);
          }
        }
      }
    };

    const timer = setTimeout(showNextMessage, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-170 mx-auto">
      {/* iPhone Container */}
      <div className="bg-[#f5f5f5] dark:bg-zinc-900 rounded-[40px] p-6 transition-colors duration-300">
        {/* iPhone Notch */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-8 bg-black dark:bg-zinc-800 rounded-full"></div>
        </div>

        {/* Chat Header */}
        <div className="text-center pb-4 border-b border-gray-300 dark:border-zinc-700 mb-6">
          <div className="w-16 h-16 bg-linear-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-2xl">
            N
          </div>
          <p className="font-semibold text-gray-900 dark:text-white text-lg">Nicolle</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">iMessage</p>
        </div>

        {/* Messages Container */}
        <div className="min-h-[280px] flex flex-col gap-4 px-4">
          {visibleMessages.map((message) => (
            <div
              key={message.id}
              className={`animate-fade-in-up ${
                message.sender === 'user' ? 'self-end' : 'self-start'
              }`}
            >
              <div
                className={`px-5 py-3 max-w-[320px] ${
                  message.sender === 'user'
                    ? 'bg-[#007aff] text-white rounded-2xl rounded-br-sm'
                    : 'bg-[#e5e5ea] dark:bg-zinc-700 text-black dark:text-white rounded-2xl rounded-bl-sm'
                }`}
              >
                <p className="text-base leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="self-start animate-fade-in-up">
              <TypingIndicator />
            </div>
          )}

          {showDelivered && (
            <p className="text-xs text-gray-400 self-end mr-2 animate-fade-in-up">
              Delivered
            </p>
          )}
        </div>

        {/* Input Bar */}
        <div className="mt-6 flex items-center gap-3 px-4">
          <div className="flex-1 bg-white dark:bg-zinc-800 rounded-full border border-gray-300 dark:border-zinc-600 px-5 py-3">
            <p className="text-gray-400">iMessage</p>
          </div>
          <button className="w-10 h-10 bg-[#007aff] rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center mt-6">
          <div className="w-36 h-1.5 bg-black dark:bg-zinc-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
export { ChatInterface };
