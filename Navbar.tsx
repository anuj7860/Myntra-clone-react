import { Search, ShoppingBag, Heart, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-pink-500">MYNTRA</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-pink-500">MEN</a>
              <a href="#" className="hover:text-pink-500">WOMEN</a>
              <a href="#" className="hover:text-pink-500">KIDS</a>
              <a href="#" className="hover:text-pink-500">HOME</a>
              <a href="#" className="hover:text-pink-500">BEAUTY</a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-pink-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex flex-col items-center">
                <User className="h-6 w-6" />
                <span className="text-xs">Profile</span>
              </button>
              <button className="flex flex-col items-center">
                <Heart className="h-6 w-6" />
                <span className="text-xs">Wishlist</span>
              </button>
              <button className="flex flex-col items-center">
                <ShoppingBag className="h-6 w-6" />
                <span className="text-xs">Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}