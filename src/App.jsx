import React, { useMemo, useState } from 'react';
import HeaderBrand from './components/HeaderBrand';
import CountrySelector from './components/CountrySelector';
import ProductGrid from './components/ProductGrid';
import CheckoutPage from './components/CheckoutPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'checkout'
  const [country, setCountry] = useState('ID');
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(() => cart.reduce((acc, i) => acc + i.qty, 0), [cart]);

  const handleAdd = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <HeaderBrand />

      <main className="mx-auto w-full max-w-[360px] px-4 pb-24 pt-4">
        {/* Promo banner */}
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-3 text-center text-xs text-gray-700">
          We’ve gone global! Enjoy free shipping on all international orders 🌎✨
        </div>

        {/* Tabs */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          <button
            className={`rounded-lg px-3 py-2 text-sm font-medium ${
              activeTab === 'list' ? 'text-white' : 'text-gray-700'
            }`}
            style={{ backgroundColor: activeTab === 'list' ? '#E53935' : '#E5E7EB' }}
            onClick={() => setActiveTab('list')}
          >
            Products
          </button>
          <button
            className={`rounded-lg px-3 py-2 text-sm font-medium ${
              activeTab === 'checkout' ? 'text-white' : 'text-gray-700'
            }`}
            style={{ backgroundColor: activeTab === 'checkout' ? '#E53935' : '#E5E7EB' }}
            onClick={() => setActiveTab('checkout')}
          >
            Checkout {cartCount > 0 ? `(${cartCount})` : ''}
          </button>
        </div>

        {/* Country selector */}
        <div className="mb-4">
          <CountrySelector country={country} onChange={setCountry} />
        </div>

        {activeTab === 'list' ? (
          <ProductGrid country={country} onAdd={handleAdd} />
        ) : (
          <CheckoutPage country={country} cart={cart} />
        )}

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Free shipping applies automatically for all eligible destinations. No code needed.
        </p>
      </main>
    </div>
  );
}
