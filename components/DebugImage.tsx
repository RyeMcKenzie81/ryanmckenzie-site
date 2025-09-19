'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DebugImage() {
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const handleError = (e: any) => {
    console.error('Image failed to load:', e);
    console.error('Error target:', e.target);
    console.error('Error currentTarget:', e.currentTarget);
    setError(`Image failed to load: ${e.message || 'Unknown error'}`);
  };

  const handleLoad = () => {
    console.log('Image loaded successfully!');
    setLoaded(true);
  };

  return (
    <div className="absolute inset-0 -z-10">
      {/* Debug info overlay */}
      {error && (
        <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded text-sm z-50">
          Error: {error}
        </div>
      )}

      {loaded && (
        <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded text-sm z-50">
          Image loaded!
        </div>
      )}

      {/* Try multiple image sources */}
      <img
        src="https://raw.githubusercontent.com/RyeMcKenzie81/ryanmckenzie-site/main/hero-backup.jpg"
        alt="Ryan McKenzie"
        className="w-full h-full object-cover"
        onError={handleError}
        onLoad={handleLoad}
      />

      {/* Fallback regular img tag */}
      {error && (
        <img
          src="/images/hero.jpg"
          alt="Ryan McKenzie Fallback"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Fallback image also failed:', e);
            setError('Both primary and fallback images failed');
          }}
          onLoad={() => {
            console.log('Fallback image loaded!');
            setLoaded(true);
            setError(null);
          }}
        />
      )}

      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}