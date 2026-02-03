function CareersTile() {
  return (
    <div className="relative w-full sm:w-[250px] md:w-[280px] aspect-square rounded-2xl overflow-hidden group shadow-lg bg-zinc-800 dark:bg-zinc-950 transition-colors duration-300">
      <div className="relative z-10 flex flex-col h-full justify-end p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-1">Careers</h3>
          <p className="text-lg text-white/80">Join our team and build the future.</p>
        </div>
        <a
          href="#apply"
          className="inline-block px-6 py-2 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default CareersTile;
export { CareersTile };
