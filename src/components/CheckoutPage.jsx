import React, { useMemo } from 'react';
import { Truck } from 'lucide-react';

function formatCurrency(n) {
  return `$${n.toFixed(2)}`;
}

function ShippingInfo({ country }) {
  const isMalaysia = country === 'MY';
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
      <div className="flex items-start gap-2">
        <div className="rounded-md bg-white p-2 text-gray-700">
          <Truck className="h-5 w-5" />
        </div>
        <div>
          {isMalaysia ? (
            <>
              <p className="text-sm font-semibold">🚚 Standard Shipping Fee Applies</p>
              <p className="text-xs text-gray-600">Malaysia is not included in the free shipping zone.</p>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold">✅ Free Worldwide Shipping Applied</p>
              <p className="text-xs text-gray-600">Your order ships free to your country.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage({ country, cart }) {
  const isMalaysia = country === 'MY';

  const { subtotal, shipping, total, saved } = useMemo(() => {
    const sub = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
    const ship = isMalaysia ? 8 : 0;
    const ttl = sub + ship;
    return { subtotal: sub, shipping: ship, total: ttl, saved: isMalaysia ? 0 : 8 };
  }, [cart, isMalaysia]);

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium">Shipping Address</p>
          <span className="text-xs text-gray-500">Auto-detected</span>
        </div>
        <div className="space-y-1 text-sm">
          <p>John Doe</p>
          <p>Jl. Kebon Jeruk No. 12</p>
          <p>Jakarta, 11480</p>
          <p className="text-gray-600">Country: <span className="font-medium">{country}</span></p>
        </div>
      </div>

      <ShippingInfo country={country} />

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <p className="mb-3 text-sm font-medium">Order Summary</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
          </div>
          <div className="h-px bg-gray-200" />
          <div className="flex items-center justify-between text-base font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          {saved > 0 ? `You saved up to $${saved} in shipping cost!` : 'Shipping calculated automatically based on your location.'}
        </p>
        <button
          className="mt-4 w-full rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          style={{ backgroundColor: '#E53935' }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
