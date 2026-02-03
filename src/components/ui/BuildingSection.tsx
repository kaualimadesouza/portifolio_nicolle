import { Card } from './Card';

function BuildingSection() {
  return (
    <Card className="p-6 md:p-8 h-full">
      <h1 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6 leading-tight tracking-tight">
        <b className="text-black dark:text-white">Nicolle Marinho</b> cria <span className="underline decoration-black dark:decoration-white text-black dark:text-white">coisas</span><span className="text-gray-500 dark:text-gray-400">.</span>
      </h1>
      <div className="h-px bg-black/10 dark:bg-white/10 mb-4 md:mb-6"></div>
      <div className="space-y-2 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        <p>eu crio coisas.</p>
        <p>eu acredito que o design pode mudar as coisas.</p>
        <p>eu acredito que as coisas que criamos sao tao importantes quanto as que escolhemos nao criar.</p>
        <p>eu acredito que devemos criar coisas que fazem o que nao gostamos, e tornam o que gostamos ainda melhor.</p>
        <p>eu acho que existem coisas demais.</p>
        <p className="flex items-center gap-1 flex-wrap">
          eu acho que deveria haver menos, porem melhores coisas
          <span className="text-red-500">*</span>
          <span className="text-gray-600 dark:text-gray-400">.</span>
        </p>
        <p>as melhores coisas. uma quantidade ideal.</p>
      </div>
      <div className="mt-4 flex items-center gap-1">
        <span className="text-red-500">*</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm italic">Menos, mas melhor. — Dieter Rams</span>
      </div>
    </Card>
  );
}

export default BuildingSection;
export { BuildingSection };
