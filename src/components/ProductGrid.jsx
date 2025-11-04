import React from 'react';
import { Globe, Truck } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Minimal Leather Backpack',
    price: 79.0,
    image:
      'https://images.unsplash.com/photo-1511389026070-a14ae610a1be?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Wireless Over-Ear Headphones',
    price: 129.0,
    image:
      'https://images.unsplash.com/photo-1518449032156-9542d2d2e83e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Ceramic Mug Set',
    price: 24.0,
    image:
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Smart Fitness Band',
    price: 49.0,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
  },
];

function ShippingBadge({ isMalaysia }) {
  if (isMalaysia) {
    return (
      <span
        className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium text-gray-700"
        style={{ backgroundColor: '#E0E0E0' }}
      >
        <Truck className="h-3 w-3" /> Standard Shipping
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium text-white"
      style={{ backgroundColor: '#4CAF50' }}
    >
      <Globe className="h-3 w-3" /> Free Worldwide Shipping
    </span>
  );
}

export default function ProductGrid({ country, onAdd }) {
  const isMalaysia = country === 'MY';

  return (
    <div className="grid grid-cols-2 gap-3">
      {PRODUCTS.map((p) => (
        <div
          key={p.id}
          className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <img
              src={p.image}
              alt={p.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-1.5 p-3">
            <div className="line-clamp-2 text-sm font-medium text-gray-900">{p.name}</div>
            <div className="text-sm font-semibold" style={{ color: '#111827' }}>
              ${p.price.toFixed(2)}
            </div>
            <ShippingBadge isMalaysia={isMalaysia} />
            <div className="pt-2">
              <button
                onClick={() => onAdd(p)}
                className="w-full rounded-lg px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:opacity-95"
                style={{ backgroundColor: '#E53935' }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Tooltip */}
          <div className="pointer-events-none absolute inset-x-0 top-2 z-10 hidden justify-center group-hover:flex">
            <div className="rounded-md bg-black/80 px-2 py-1 text-[11px] text-white shadow-md">
              {isMalaysia
                ? 'Free shipping not available for Malaysia.'
                : 'Enjoy free shipping to your country!'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
