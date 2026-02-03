interface ContactOptionCardProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  sublabel?: string;
}

function ContactOptionCard({ icon, label, href, sublabel }: ContactOptionCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-zinc-800 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-center">
        <p className="font-medium text-gray-900 dark:text-white">{label}</p>
        {sublabel && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{sublabel}</p>
        )}
      </div>
    </a>
  );
}

export default ContactOptionCard;
export { ContactOptionCard };
