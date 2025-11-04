import React from 'react';
import { Info, Star, Rocket } from 'lucide-react';

const tips = [
  {
    icon: <Rocket size={16} className="text-red-600" />,
    title: 'Gunakan kode unik',
    desc: 'Pastikan setiap promosi menggunakan link/kode unik untuk pelacakan akurat.',
  },
  {
    icon: <Star size={16} className="text-red-600" />,
    title: 'Fokus pada value',
    desc: 'Sorot manfaat utama produk dan testimoni nyata untuk meningkatkan konversi.',
  },
  {
    icon: <Info size={16} className="text-red-600" />,
    title: 'Timing promosi',
    desc: 'Jadwalkan konten saat prime-time audiens kamu paling aktif.',
  },
];

export default function TipsAndTricks() {
  return (
    <section className="px-5 py-6">
      <h2 className="mb-3 text-base font-semibold text-gray-900">Tips & Trick</h2>
      <div className="flex flex-col gap-3">
        {tips.map((t, idx) => (
          <div key={idx} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="mb-1 flex items-center gap-2">
              {t.icon}
              <h3 className="text-sm font-semibold text-gray-900">{t.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
