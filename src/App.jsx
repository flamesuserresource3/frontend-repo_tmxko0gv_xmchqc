import React from 'react';
import HeroSection from './components/HeroSection';
import CategoriesGrid from './components/CategoriesGrid';
import AffiliateProducts from './components/AffiliateProducts';
import TipsAndTricks from './components/TipsAndTricks';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <CategoriesGrid />
      <AffiliateProducts />
      <TipsAndTricks />
      <div className="h-8" />
    </div>
  );
}

export default App;
