import { Card } from './Card';

interface ProjectShowcaseCardProps {
  title: string;
  description: string;
  emoji?: string;
  image?: string;
  link?: string;
  color?: string;
}

function ProjectShowcaseCard({
  title,
  description,
  emoji = "📖",
  image,
  link = "/work",
  color = "from-amber-500 to-orange-600"
}: ProjectShowcaseCardProps) {
  return (
    <Card className="group relative overflow-hidden h-full min-h-[200px]">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left pointer-events-none rounded-4xl`}></div>

      <a href={link} className="relative z-10 flex flex-col h-full p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{emoji}</span>
          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>

        {image && (
          <div className="flex-1 flex items-center justify-center py-4">
            <img
              src={image}
              alt={title}
              className="max-h-32 object-contain rounded-lg shadow-md"
            />
          </div>
        )}

        <div className="mt-auto pt-4">
          <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-white transition-colors duration-500 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-500 line-clamp-2">
            {description}
          </p>
        </div>
      </a>
    </Card>
  );
}

export default ProjectShowcaseCard;
export { ProjectShowcaseCard };
