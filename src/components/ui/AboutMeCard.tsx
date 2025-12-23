import { Card } from './Card';

function AboutMeCard() {
  return (
    <Card className="p-8 max-w-2xl">
      <h1 className="text-3xl font-medium mb-6 leading-tight tracking-tight">
        <span className="font-bold text-black">What I'm bout.</span>
      </h1>
      <div className="h-px bg-black/10 mb-8"></div>
      <div className="space-y-8">
        {/* Where I'm From */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">Where I'M From</div>
          <div className="text-lg leading-relaxed font-light text-gray-500">
            I was born and raised in Utica, NY. My Dad worked as a mail carrier for the Post Office. My Mom worked as a Kindergarten Teacher. Growing up they repeatedly told me to get off the computer and go outside. The OG Touch Grass™. I'm glad I did. There's not a ton to do in Utica but there is a ton to eat and the food is definitely better than where you're from.
          </div>
        </div>
        {/* What I used to Do */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">What I used to Do</div>
          <div className="text-lg leading-relaxed font-light text-gray-500">
            When I was 13, I got my first job as a dishwasher at <span className="bg-gray-200 px-1 rounded">REDACTEDDDDD</span> [redacted due to child labor laws]. After that, I made pizzas at a pizzeria, chased kids around as a security guard at an elementary school, and tried to sell mattresses I knew nothing about at a furniture store.
          </div>
        </div>
        {/* What I Do Now */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">What I Do Now</div>
          <div className="text-lg leading-relaxed font-light text-gray-500">
            Today I'm a <span className="font-semibold text-black">Product Designer</span> at{' '}
            <a href="https://www.figma.com/" className="text-blue-600 underline hover:text-blue-800 font-semibold">Figma</a>{' '}
            <a href="https://www.figma.com/" className="text-blue-600 hover:text-blue-800 ml-1">↗</a> designing AI experiences. Previously, I was the <span className="font-semibold text-black">Founding Product Designer</span> at{' '}
            <a href="https://diagram.com/" className="text-blue-600 underline hover:text-blue-800 font-semibold">Diagram</a>{' '}
            <a href="https://diagram.com/" className="text-blue-600 hover:text-blue-800 ml-1">↗</a>. Before all of that, I worked as an <span className="font-semibold text-black">Engineer</span> at{' '}
            <a href="https://www.romanelli.com/" className="text-blue-600 underline hover:text-blue-800 font-semibold">Romanelli</a>{' '}
            <a href="https://www.romanelli.com/" className="text-blue-600 hover:text-blue-800 ml-1">↗</a> where I learned how to code (thanks,{' '}
            <a href="https://twitter.com/xac" className="text-blue-600 underline hover:text-blue-800 font-semibold">Zac ↗</a>) and how to stop coding (thanks, Webflow).
          </div>
        </div>
        {/* Where I'm At Now */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">Where I'm At Now</div>
          <div className="text-lg leading-relaxed font-light text-gray-500">
            Today, I live in San Francisco, California. When I'm not working, you can usually find me with my dog at the beach, the park, or the redwoods.
          </div>
        </div>
        {/* What I'm Looking For */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">What I'm Looking For</div>
          <div className="text-lg leading-relaxed font-light text-gray-500">
            Impactful, purposeful work with a diverse team of talented people. <br />
            I also think the personal computer needs its{' '}
            <a href="https://marcocornacchia.substack.com/p/my-dads-iphone?showWelcome=true" className="text-blue-600 underline hover:text-blue-800 font-semibold">iPhone moment</a>{' '}
            <a href="https://marcocornacchia.substack.com/p/my-dads-iphone?showWelcome=true" className="text-blue-600 hover:text-blue-800 ml-1">↗</a>.
          </div>
        </div>
      </div>
      {/* Ícones de contato (simples, sem tooltip animado) */}
      <div className="flex gap-4 mt-8">
        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/63028d7724ba5803db2a7ba4_imessage-icon.svg" alt="iMessage" className="w-5 h-5" />
        </a>
        <a href="mailto:hi@marco.fyi" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62f5dbe13ef14900c4c5e5f5_email-contact-icon.svg" alt="Email" className="w-5 h-5" />
        </a>
        <a href="https://read.cv/marcocornacchia" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/63110ad668b7e7e21de162de_read-cv-icon.svg" alt="CV" className="w-5 h-5" />
        </a>
        <a href="https://twitter.com/marcofyi" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62f5dbe10a419234e527d174_twitter-contact-icon.svg" alt="Twitter" className="w-5 h-5" />
        </a>
      </div>
    </Card>
  );
}

export default AboutMeCard;
export { AboutMeCard };
