import { useRef, useState, useEffect } from 'react';
import { 
  Navigation,
  AboutMeCard
} from '../components/ui';
import InstagramCard from '../components/ui/InstagramCard';
import LinkedinCard from '../components/ui/LinkedinCard';

function About() {
  const leftColRef = useRef<HTMLDivElement>(null);
  const [rightColMaxHeight, setRightColMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (leftColRef.current && window.innerWidth >= 1024) {
        setRightColMaxHeight(leftColRef.current.offsetHeight);
      } else {
        setRightColMaxHeight(null);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    // Observar mudanças no conteúdo do AboutMeCard
    const resizeObserver = new ResizeObserver(updateHeight);
    if (leftColRef.current) {
      resizeObserver.observe(leftColRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      resizeObserver.disconnect();
    };
  }, []);

  // Altura fixa dos cards Instagram/LinkedIn (320px = h-80)
  const socialCardsHeight = 320;
  const gap = 16; // gap-4 = 16px
  const timelineMaxHeight = rightColMaxHeight 
    ? rightColMaxHeight - socialCardsHeight - gap 
    : 400; // fallback

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />
      {/* Main Content */}
      <div className="pt-6 pb-28 md:pt-28 md:pb-24 lg:pt-28 lg:pb-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Grid principal - 2 colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-start">
            
            {/* Left Column - Card Grande (altura natural) */}
            <div ref={leftColRef} className="rounded-3xl">
              <AboutMeCard />
            </div>
            
            {/* Right Column - Grid de Cards Menores (acompanha altura da esquerda) */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full flex-shrink-0">
                <div className="h-64 sm:h-72 md:h-80">
                  <InstagramCard />
                </div>
                <div className="h-64 sm:h-72 md:h-80">
                  <LinkedinCard />
                </div>
              </div>
              
              {/* Card 5 - Timeline */}
              <div 
                className="bg-gray-100 dark:bg-zinc-900 rounded-3xl p-4 sm:p-6 w-full transition-colors duration-300 flex flex-col overflow-hidden min-h-[200px]"
                style={{ maxHeight: rightColMaxHeight ? `${timelineMaxHeight}px` : '400px' }}
              >
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 flex-shrink-0">
                  Experiência
                </h3>
                <div className="relative flex-1 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-zinc-600">
                  {/* Timeline line */}
                  <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gray-300 dark:bg-zinc-700" />
                  
                  <div className="space-y-4">
                    {/* PIBID */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-purple-500 font-semibold">dez 2025 - atual</span>
                        <span className="text-[9px] bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded">3 meses</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Bolsista PIBID - Língua Portuguesa</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Universidade de São Paulo</p>
                    </div>

                    {/* Coordenadora Contar Histórias */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-fuchsia-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-fuchsia-500 font-semibold">jan 2025 - dez 2025</span>
                        <span className="text-[9px] bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 px-1.5 py-0.5 rounded">1 ano</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Coordenadora de Oficinas - Contar Histórias</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Universidade de São Paulo</p>
                    </div>

                    {/* Corretora Argumento */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-violet-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-violet-500 font-semibold">set 2025 - atual</span>
                        <span className="text-[9px] bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-1.5 py-0.5 rounded">6 meses</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Corretora de Redação</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Colégio Argumento</p>
                    </div>

                    {/* Monitora Villare */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-pink-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-pink-500 font-semibold">jun 2025 - jan 2026</span>
                        <span className="text-[9px] bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded">8 meses</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Monitora de Português - Estágio</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Escola Villare</p>
                    </div>

                    {/* Salvaguarda */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-rose-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-rose-500 font-semibold">jan 2025 - dez 2025</span>
                        <span className="text-[9px] bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded">1 ano</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Corretora de Redação Voluntária</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Salvaguarda</p>
                    </div>

                    {/* Publicação Contos */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-amber-500 font-semibold">jun 2025</span>
                        <span className="text-[9px] bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded">📖 Livro</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Contos em Preto e Branco</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Editora Minimalismos</p>
                    </div>

                    {/* Arco Educação */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-blue-500 font-semibold">abr 2025 - jun 2025</span>
                        <span className="text-[9px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded">3 meses</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Diagramadora Freelancer</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Arco Educação</p>
                    </div>

                    {/* IC PIBIC */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-green-500 font-semibold">nov 2024 - nov 2025</span>
                        <span className="text-[9px] bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded">1 ano</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Iniciação Científica PIBIC/CNPq</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Universidade de São Paulo</p>
                    </div>

                    {/* Futuro do Pretérito */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-orange-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-orange-500 font-semibold">ago 2023 - dez 2025</span>
                        <span className="text-[9px] bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded">2 anos 5 meses</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Diagramadora Revista Futuro do Pretérito</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Faculdade de Educação USP</p>
                    </div>

                    {/* Graduação */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-indigo-500 font-semibold">2023 - 2027</span>
                        <span className="text-[9px] bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded">🎓 Formação</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Graduação em Letras (Italiano)</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Universidade de São Paulo</p>
                    </div>

                    {/* Palestrante */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-yellow-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-yellow-500 font-semibold">2022</span>
                        <span className="text-[9px] bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded">🎤 Palestra</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Palestrante - Semana Literária</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Colégio Sapiens</p>
                    </div>

                    {/* Aos Olhos do Coração */}
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-red-500 border-2 border-white dark:border-zinc-900" />
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-red-500 font-semibold">2021</span>
                        <span className="text-[9px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded">📖 Livro</span>
                      </div>
                      <p className="text-xs sm:text-sm text-black dark:text-white font-medium">Aos Olhos do Coração</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Publicação Independente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
export { About };
