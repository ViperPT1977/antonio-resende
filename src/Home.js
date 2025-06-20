import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Abstract', 'Architectural', 'Automation', 'CNC Machines', 'Electronics',
  'Food & Drink Products', 'Jewelry', 'Mechanical Parts', 'Vehicles', 'Others'
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-12 px-6 text-white">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Antonio Resende | 3D Design & Rendering</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Explore a categorized portfolio of 3D renderings and design projects.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => {
          const key = cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
          return (
            <Link
              key={index}
              to={`/${key}`}
              className="bg-gray-900 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 group"
            >
              <img src={`/categories/${key}.jpg`} alt={cat} className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:opacity-90" />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">{cat}</h2>
              </div>
            </Link>
          );
        })}
      </section>

      <footer className="mt-20 border-t border-gray-700 pt-8 text-sm text-gray-300 max-w-2xl mx-auto">
        <div className="space-y-4 text-center">
          <div>
            <span className="inline-block mr-2">🔗</span>
            <strong>Linkedin Profile:</strong><br />
            <a href="https://linkedin.com/in/antonioresende-cadcam" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              linkedin.com/in/antonioresende-cadcam
            </a>
          </div>
          <div>
            <span className="inline-block mr-2">📞</span>
            <strong>Phone:</strong> 00351935017007 <span className="text-gray-500">(Mobile)</span>
          </div>
          <div>
            <span className="inline-block mr-2">✉️</span>
            <strong>Email:</strong> <a href="mailto:amaralresende@gmail.com" className="text-blue-400 hover:underline">amaralresende@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}