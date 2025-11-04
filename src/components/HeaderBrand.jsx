import React from 'react';

export default function HeaderBrand() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-[360px] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md" style={{ backgroundColor: '#E53935' }} />
          <span className="font-semibold tracking-tight">ShopLite</span>
        </div>
        <button
          type="button"
          className="rounded-md px-3 py-1.5 text-white text-sm font-medium shadow-sm"
          style={{ backgroundColor: '#E53935' }}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}
