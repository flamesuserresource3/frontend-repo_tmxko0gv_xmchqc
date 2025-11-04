import React from 'react';
import HeroSection from './components/HeroSection';
import CategoriesGrid from './components/CategoriesGrid';
import AffiliateProducts from './components/AffiliateProducts';
import TipsAndTricks from './components/TipsAndTricks';

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-[360px] bg-white">
        <HeroSection />
        <CategoriesGrid />
        <AffiliateProducts />
        <TipsAndTricks />
        <div className="h-8" />
      </div>
    </div>
  );
}

export default App;
