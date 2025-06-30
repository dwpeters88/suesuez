
import { useState, useEffect } from 'react';

// This is a placeholder for your cart items. 
// In a real application, you would fetch this from localStorage or a state management library.
const initialCart = [];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const proceedToCheckout = () => {
    // This is where you would redirect the user to the Shopify checkout page.
    alert('Proceeding to checkout!');
  };

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {cart.map((item) => (
          <li key={item.id} className="py-4 flex">
            <img src={item.image.url} alt={item.image.altText} className="h-24 w-24 rounded-md object-cover" />
            <div className="ml-4 flex-1 flex flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href={`/products/${item.handle}`}>{item.title}</a>
                  </h3>
                  <p className="ml-4">{new Intl.NumberFormat('en-GB', { style: 'currency', currency: item.price.currencyCode }).format(item.price.amount)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{item.variantTitle}</p>
              </div>
              <div className="flex-1 flex items-end justify-between text-sm">
                <p className="text-gray-500">Qty {item.quantity}</p>

                <div className="flex">
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button
          onClick={proceedToCheckout}
          className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
