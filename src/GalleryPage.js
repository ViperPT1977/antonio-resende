import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function GalleryPage() {
  const { category } = useParams();
  const folder = category.replace(/[^a-z0-9]/g, '-');

  const contexts = {
    abstract: require.context('./assets/gallery/abstract', false, /\.jpg$/),
    architectural: require.context('./assets/gallery/architectural', false, /\.jpg$/),
    automation: require.context('./assets/gallery/automation', false, /\.jpg$/),
    cnc: require.context('./assets/gallery/cnc', false, /\.jpg$/),
    electronics: require.context('./assets/gallery/electronics', false, /\.jpg$/),
    food: require.context('./assets/gallery/food', false, /\.jpg$/),
    jewelry: require.context('./assets/gallery/jewelry', false, /\.jpg$/),
    mechanical: require.context('./assets/gallery/mechanical', false, /\.jpg$/),
    vehicles: require.context('./assets/gallery/vehicles', false, /\.jpg$/),
    others: require.context('./assets/gallery/others', false, /\.jpg$/),
  };

  const context = contexts[folder];
  const images = context ? context.keys().map(context) : [];

  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const next = () => setLightbox(prev => ({ ...prev, index: (prev.index + 1) % images.length }));
  const prev = () => setLightbox(prev => ({ ...prev, index: (prev.index - 1 + images.length) % images.length }));

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <header className="mb-10 flex justify-between items-center">
        <h1 className="text-4xl font-bold capitalize">{category.replace(/-/g, ' ')}</h1>
        <Link to="/" className="text-sm text-blue-400 hover:underline">← Back to Home</Link>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openLightbox(i)}>
            <img src={src} alt={`Render ${i + 1}`} className="w-full h-56 sm:h-64 md:h-72 object-cover hover:scale-105 transition transform duration-200" />
          </div>
        ))}
      </div>

      {lightbox.open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 text-white text-4xl">‹</button>
          <img src={images[lightbox.index]} alt="Zoom" className="max-w-[96vw] max-h-[96vh] object-contain rounded-lg shadow-2xl" />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 text-white text-4xl">›</button>
        </div>
      )}
    </div>
  );
}