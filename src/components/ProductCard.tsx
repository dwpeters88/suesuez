import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { formatPrice } from '../lib/shopify';
import type { ShopifyProduct } from '../lib/shopify';

interface ProductCardProps {
  product: ShopifyProduct;
  onAddToCart?: (productId: string, variantId: string) => void;
  onQuickView?: (product: ShopifyProduct) => void;
  className?: string;
}

export default function ProductCard({ 
  product, 
  onAddToCart, 
  onQuickView, 
  className = '' 
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const primaryImage = product.images.nodes[0];
  const secondaryImage = product.images.nodes[1];
  const price = product.priceRange.minVariantPrice;
  const defaultVariant = product.variants.nodes[0];
  
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // In a real app, you'd sync this with your wishlist API
  };

  const handleAddToCart = () => {
    if (onAddToCart && defaultVariant) {
      onAddToCart(product.id, defaultVariant.id);
    }
  };

  const handleQuickView = () => {
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <div className={`group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <a href={`/products/${product.handle}`}>
          <img
            src={primaryImage?.url || '/placeholder.jpg'}
            alt={primaryImage?.altText || product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onMouseEnter={() => secondaryImage && setCurrentImageIndex(1)}
            onMouseLeave={() => setCurrentImageIndex(0)}
          />
          {secondaryImage && (
            <img
              src={secondaryImage.url}
              alt={secondaryImage.altText || product.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </a>
        
        {/* Product Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {product.tags.includes('new') && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              New
            </span>
          )}
          {product.tags.includes('sale') && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Sale
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full shadow-md transition-colors duration-200 ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          
          <button
            onClick={handleQuickView}
            className="p-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAddToCart}
            disabled={!defaultVariant?.availableForSale}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              defaultVariant?.availableForSale
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {defaultVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Vendor */}
        {product.vendor && (
          <p className="text-sm text-gray-500 mb-1">{product.vendor}</p>
        )}
        
        {/* Product Title */}
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
          <a href={`/products/${product.handle}`} className="hover:text-primary-600">
            {product.title}
          </a>
        </h3>

        {/* Product Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating - Placeholder for now */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">(4.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">
              {formatPrice(price.amount, price.currencyCode)}
            </span>
            {/* Compare at price - if product is on sale */}
            {product.tags.includes('sale') && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice((parseFloat(price.amount) * 1.2).toString(), price.currencyCode)}
              </span>
            )}
          </div>
          
          {/* Variant count */}
          {product.variants.nodes.length > 1 && (
            <span className="text-sm text-gray-500">
              {product.variants.nodes.length} variants
            </span>
          )}
        </div>

        {/* Color Options Preview */}
        {product.options.find(option => option.name.toLowerCase() === 'color') && (
          <div className="mt-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Colors:</span>
              <div className="flex space-x-1">
                {product.options
                  .find(option => option.name.toLowerCase() === 'color')
                  ?.values.slice(0, 4)
                  .map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 