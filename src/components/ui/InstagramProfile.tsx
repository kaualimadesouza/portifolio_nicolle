import { Card } from './Card';

function InstagramProfile() {
  return (
    <Card>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 6.75zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 8.25zm5.5.75a1 1 0 1 1-1 1a1 1 0 0 1 1-1z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-medium text-black">Marco Cornacchia</p>
          <p className="text-gray-500 text-sm">@marco.ig</p>
        </div>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-sm flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 6.75zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 8.25zm5.5.75a1 1 0 1 1-1 1a1 1 0 0 1 1-1z" />
          </svg>
        </div>
      </div>
      <p className="text-black mb-4 leading-relaxed">
        sharing moments • prev <span className="text-pink-500">@vercel</span> <span className="text-pink-500">@v0</span> <span className="text-pink-500">@figma</span> <span className="text-pink-500">@diagram</span>
      </p>
      <button className="w-full py-2.5 px-4 rounded-full border-2 border-black/10 bg-white/50 backdrop-blur-md hover:bg-white transition-colors flex items-center justify-center gap-2">
        <span className="text-black font-medium">Ver perfil no Instagram</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </Card>
  );
}

export default InstagramProfile;
export { InstagramProfile };