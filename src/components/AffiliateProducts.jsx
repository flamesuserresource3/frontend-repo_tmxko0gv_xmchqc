import React from 'react';
import { Tag, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Smartwatch Pro X1',
    price: 'Rp 899.000',
    commission: '12%',
    img: 'https://images.unsplash.com/photo-1518442486780-43f5e691ab13?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Wireless Earbuds S',
    price: 'Rp 459.000',
    commission: '10%',
    img: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee1f2a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Bottle Thermo 1L',
    price: 'Rp 199.000',
    commission: '8%',
    img: 'https://images.unsplash.com/photo-1542736667-069246bdbc8e?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProductCard = ({ p }) => (
  <div className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5">
    <div className="h-20 w-20 overflow-hidden rounded-xl bg-gray-100">
      <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
    </div>
    <div className="flex flex-1 flex-col justify-between">
      <div>
        <h3 className="line-clamp-1 text-sm font-semibold text-gray-900">{p.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
          <Tag size={14} className="text-red-600" />
          Komisi {p.commission}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900">{p.price}</span>
        <button className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-red-700 active:scale-[0.98]">
          Promote
        </button>
      </div>
    </div>
  </div>
);

export default function AffiliateProducts() {
  return (
    <section className="px-5 pt-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Produk Affiliate</h2>
        <button className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
          Lihat semua <ChevronRight size={16} />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
