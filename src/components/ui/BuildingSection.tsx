import { Card } from './Card';

function BuildingSection() {
  return (
    <Card className="p-8">
      <h1 className="text-3xl font-medium mb-6 leading-tight tracking-tight">
        <b>Nicolle Marinho</b> is building <span className="underline decoration-black">Turf</span><span className="text-gray-500">.</span>
      </h1>
      <div className="h-px bg-black/6 mb-6"></div>
      <div className="space-y-2 text-xl text-gray-600 leading-relaxed">
        <p>i design things.</p>
        <p>i think design can change things.</p>
        <p>i think the things we design are just as important as the things we choose not to.</p>
        <p>i think we should design things that do the things we don't enjoy, and make the things we do enjoy, even better.</p>
        <p>i think there are too many things.</p>
        <p className="flex items-center gap-1">
          i think there should be fewer, but better things
          <span className="text-red-500">*</span>
          <span className="text-gray-600">.</span>
        </p>
        <p>the best things. an optimal amount.</p>
      </div>
      <div className="mt-4 flex items-center gap-1">
        <span className="text-red-500">*</span>
        <a href="#" className="text-gray-600 hover:underline">Less, but better.</a>
      </div>
    </Card>
  );
}

export default BuildingSection;
export { BuildingSection };
