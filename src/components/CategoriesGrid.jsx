import React from 'react';
import { ShoppingCart, Tag, Star, TrendingUp } from 'lucide-react';

const categories = [
  { name: 'Best Seller', icon: <TrendingUp size={18} />, color: 'bg-red-50 text-red-600' },
  { name: 'Flash Sale', icon: <Tag size={18} />, color: 'bg-red-50 text-red-600' },
  { name: 'Favorit', icon: <Star size={18} />, color: 'bg-red-50 text-red-600' },
  { name: 'Semua', icon: <ShoppingCart size={18} />, color: 'bg-red-50 text-red-600' },
];

export default function CategoriesGrid() {
  return (
    <section className="px-5 pt-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Kategori Produk</h2>
        <span className="text-xs text-gray-500">Pilih kategori</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="flex flex-col items-center gap-2 rounded-xl bg-white p-3 text-center shadow-sm ring-1 ring-black/5 active:scale-[0.98]"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${cat.color}`}>
              {cat.icon}
            </div>
            <span className="text-xs font-medium text-gray-700">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
