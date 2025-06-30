
import { useState } from 'react';

export default function ProductDetails({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants.edges[0].node);

  const addToCart = () => {
    // This is where you would add the logic to add the item to the cart.
    // For now, we'll just log the selected variant to the console.
    console.log('Added to cart:', selectedVariant);
    alert(`${selectedVariant.title} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <img
          src={selectedVariant.image?.url || product.images.edges[0]?.node.url}
          alt={selectedVariant.image?.altText || product.images.edges[0]?.node.altText}
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <div
          className="prose mb-4"
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
        <p className="text-2xl font-bold mb-4">
          {new Intl.NumberFormat('en-GB', { style: 'currency', currency: selectedVariant.priceV2.currencyCode }).format(selectedVariant.priceV2.amount)}
        </p>
        <div className="mb-4">
          <label htmlFor="variant-select" className="block text-sm font-medium text-gray-700">
            Select Variant
          </label>
          <select
            id="variant-select"
            value={selectedVariant.id}
            onChange={(e) => {
              const variant = product.variants.edges.find(
                (edge) => edge.node.id === e.target.value
              ).node;
              setSelectedVariant(variant);
            }}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {product.variants.edges.map((edge) => (
              <option key={edge.node.id} value={edge.node.id}>
                {edge.node.title}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={addToCart}
          className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
