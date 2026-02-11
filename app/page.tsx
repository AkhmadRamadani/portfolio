'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { loadGitHubData } from '@/lib/loadData';
import type { GitHubData } from '@/types/github';

export default function Home() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGitHubData()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Error loading data</h2>
          <p className="text-gray-400">Please check the console for details</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Hero profile={data.profile} />
      <Projects repositories={data.repositories} />
      <Footer profile={data.profile} />
    </main>
  );
}
