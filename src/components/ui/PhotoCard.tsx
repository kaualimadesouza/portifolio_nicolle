import { Card } from './Card';

function PhotoCard() {
  return (
    <Card className="relative w-full h-full min-h-[200px] rounded-xl overflow-hidden group shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
        alt="Paisagem"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-3 right-3">
        <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center">
          <span className="text-lg">🎨</span>
        </div>
      </div>
    </Card>
  );
}

export default PhotoCard;
export { PhotoCard };
