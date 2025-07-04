import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl 3xl:max-w-8xl 5xl:max-w-[120rem] 7xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 5xl:px-16 7xl:px-24">
        {/* Main Footer Content */}
        <div className="py-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5 5xl:grid-cols-6 7xl:grid-cols-8 gap-8 3xl:gap-10 5xl:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img src="/logo-white.svg" alt="UK Store" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold">UK Store</span>
              </div>
              <p className="text-gray-300 text-sm">
                Your trusted partner for premium quality products delivered across the UK. 
                We pride ourselves on exceptional customer service and fast, reliable delivery.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/collections/all" className="text-gray-300 hover:text-white transition-colors">All Products</a></li>
                <li><a href="/collections/new-arrivals" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="/collections/bestsellers" className="text-gray-300 hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="/collections/sale" className="text-gray-300 hover:text-white transition-colors">Sale</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="text-gray-300 hover:text-white transition-colors">Help Centre</a></li>
                <li><a href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="/returns" className="text-gray-300 hover:text-white transition-colors">Returns & Exchanges</a></li>
                <li><a href="/size-guide" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="/track-order" className="text-gray-300 hover:text-white transition-colors">Track Your Order</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-300">Customer Service</p>
                    <p className="text-white font-medium">0800 123 456</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <p className="text-white font-medium">support@ukstore.co.uk</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-300">Head Office</p>
                    <p className="text-white font-medium">London, UK</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-300">Business Hours</p>
                    <p className="text-white font-medium">Mon-Fri: 9AM-6PM GMT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay in the Loop</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 3xl:grid-cols-6 5xl:grid-cols-8 7xl:grid-cols-10 gap-8 3xl:gap-10 5xl:gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium mb-1">Secure Payments</h4>
              <p className="text-sm text-gray-400">SSL encrypted checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m0 0L12 18m0 0l2.5-2.5" />
                </svg>
              </div>
              <h4 className="font-medium mb-1">Free UK Delivery</h4>
              <p className="text-sm text-gray-400">On orders over £50</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-medium mb-1">Customer Love</h4>
              <p className="text-sm text-gray-400">4.8/5 star rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h4 className="font-medium mb-1">Easy Returns</h4>
              <p className="text-sm text-gray-400">30-day return policy</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2024 UK Store. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 