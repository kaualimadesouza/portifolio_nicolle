import Card from './Card';

function ImageCard() {
  return (
    <Card className="p-6 h-80 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-gray-200`}></div>
      <div className="flex flex-col h-full justify-between">
        <img src="/sample-image.jpg" alt="Sample" className="w-full h-40 object-cover rounded-lg mb-4" />
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Gallery</p>
          <p className="text-lg font-normal text-black">Sample Image</p>
        </div>
      </div>
    </Card>
  );
}

export default ImageCard;
export { ImageCard };
