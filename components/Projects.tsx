'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import RepositoryCard from './RepositoryCard';
import type { Repository } from '@/types/github';

interface ProjectsProps {
  repositories: Repository[];
}

export default function Projects({ repositories }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('All');
  
  const languages = ['All', ...Array.from(new Set(repositories.map(r => r.Language).filter(Boolean)))];
  
  const filteredRepos = filter === 'All' 
    ? repositories 
    : repositories.filter(r => r.Language === filter);

  const sortedRepos = [...filteredRepos].sort((a, b) => b.Stars - a.Stars);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of {repositories.length} projects showcasing various technologies and skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === lang
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-gray-700/50'
              }`}
            >
              {lang}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRepos.map((repo, index) => (
            <RepositoryCard key={repo['Repository Name']} repo={repo} index={index} />
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found with this filter</p>
          </div>
        )}
      </div>
    </section>
  );
}
