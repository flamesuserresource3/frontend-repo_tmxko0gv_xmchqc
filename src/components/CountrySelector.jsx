import React from 'react';

const COUNTRIES = [
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
];

export default function CountrySelector({ country, onChange }) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm text-gray-600">Ship to</label>
      <div className="relative">
        <select
          value={country}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100"
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
      </div>
      <p className="mt-2 text-xs text-gray-500">Shipping is calculated automatically based on your location.</p>
    </div>
  );
}

export function detectInitialCountry() {
  try {
    const region = new Intl.DateTimeFormat(undefined, { timeZoneName: 'short' })
      .resolvedOptions().locale;
  } catch (e) {
    // no-op
  }
  // Fallback to browser language country if available
  try {
    const lang = navigator.language || navigator.userLanguage || '';
    const code = (lang.split('-')[1] || '').toUpperCase();
    if (code) return code;
  } catch (e) {
    // ignore
  }
  return 'ID';
}
