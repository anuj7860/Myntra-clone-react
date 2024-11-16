import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-purple-500 to-pink-500">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        alt="Fashion Banner"
      />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Discover Your Style
          </h1>
          <p className="text-xl text-white mb-8">
            Shop the latest trends in fashion with our curated collection
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors">
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}