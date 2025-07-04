import { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X, MapPin, Phone, Mail } from 'lucide-react';

interface NavigationProps {
  cartCount?: number;
  isAuthenticated?: boolean;
}

export default function Navigation({ cartCount = 0, isAuthenticated = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Free UK Delivery on Orders Over £50</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0800 123 456</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@ukstore.co.uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/flags/gb.svg" alt="UK" className="h-4 w-6" />
                <span>GBP £</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl 3xl:max-w-8xl 5xl:max-w-[120rem] 7xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 5xl:px-16 7xl:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="UK Store" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                UK Store
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 3xl:space-x-12 5xl:space-x-16">
            <a href="/" className="text-gray-700 hover:text-primary-600 font-medium">
              Home
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                Shop
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/collections/all" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  All Products
                </a>
                <a href="/collections/new-arrivals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  New Arrivals
                </a>
                <a href="/collections/bestsellers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Best Sellers
                </a>
                <a href="/collections/sale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sale
                </a>
              </div>
            </div>
            <a href="/collections" className="text-gray-700 hover:text-primary-600 font-medium">
              Collections
            </a>
            <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
              Contact
            </a>
          </div>

          {/* Search Bar */}
          <div className={`${isSearchOpen ? 'flex' : 'hidden'} md:flex items-center flex-1 max-w-md 3xl:max-w-lg 5xl:max-w-xl 7xl:max-w-2xl mx-8 3xl:mx-12 5xl:mx-16`}>
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600"
            >
              <Search className="h-6 w-6" />
            </button>
            
            <a href="/account" className="p-2 text-gray-700 hover:text-primary-600">
              <User className="h-6 w-6" />
            </a>
            
            <a href="/cart" className="relative p-2 text-gray-700 hover:text-primary-600">
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden menu-button p-2 text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
              Home
            </a>
            <a href="/collections/all" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
              Shop
            </a>
            <a href="/collections/new-arrivals" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium pl-6">
              New Arrivals
            </a>
            <a href="/collections/bestsellers" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium pl-6">
              Best Sellers
            </a>
            <a href="/collections/sale" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium pl-6">
              Sale
            </a>
            <a href="/collections" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
              Collections
            </a>
            <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
              About
            </a>
            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </form>
        </div>
      )}
    </header>
  );
} 