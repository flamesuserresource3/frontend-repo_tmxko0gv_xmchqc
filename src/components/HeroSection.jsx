import React from 'react';
import Spline from '@splinetool/react-spline';
import { Wallet, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-xl bg-white/90 backdrop-blur px-4 py-3 shadow-sm ring-1 ring-black/5">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
      <Icon size={20} />
    </div>
    <div className="flex flex-col">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-base font-semibold text-gray-900">{value}</span>
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[360px] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient top/bottom for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white/10" />

        <div className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="mb-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Affiliate Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">Pantau performa dan mulai promosi produk pilihanmu.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard icon={TrendingUp} label="Total Transaksi" value="1.245" />
            <StatCard icon={Wallet} label="Total Balance" value="Rp 12.540.000" />
          </div>

          <div className="mt-3 h-2 w-12 rounded-full bg-red-500/80" />
        </div>
      </div>
    </section>
  );
}
