interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
}

export default function ProductCard({ image, brand, name, price, originalPrice, discount }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <button className="w-full bg-white text-gray-900 py-2 rounded-md font-medium">
            ADD TO BAG
          </button>
        </div>
      </div>
      <div className="mt-3 px-2">
        <h3 className="font-medium text-gray-900">{brand}</h3>
        <p className="text-gray-600 text-sm truncate">{name}</p>
        <div className="flex items-center space-x-2 mt-1">
          <span className="font-semibold">₹{price}</span>
          <span className="text-gray-500 line-through text-sm">₹{originalPrice}</span>
          <span className="text-orange-500 text-sm">({discount}% OFF)</span>
        </div>
      </div>
    </div>
  );
}