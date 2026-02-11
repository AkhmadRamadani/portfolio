'use client';

import { motion } from 'framer-motion';
import type { Repository } from '@/types/github';

interface RepositoryCardProps {
  repo: Repository;
  index: number;
}

const languageColors: { [key: string]: string } = {
  "Android Native": "#3DDC84",
  "React Native": "#61DAFB",
  "Jupyter Notebook": "#DA5B0B",
  Flutter: "#02569B",
  "Flutter Package": "#42A5F5",
  Laravel: "#FF2D20",
  FastAPI: "#009688",
  "React JS": "#61DAFB",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Dart: "#00B4AB",
  "PHP SLIM 3": "#777BB4",
};

export default function RepositoryCard({ repo, index }: RepositoryCardProps) {
  const languageColor = languageColors[repo.Language] || '#8b949e';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glow-card rounded-2xl p-6 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-xl text-white flex-1 line-clamp-1">
          {repo['Repository Name']}
        </h3>
        <div className="flex gap-3 ml-4">
          {repo.Stars > 0 && (
            <div className="flex items-center gap-1 text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">{repo.Stars}</span>
            </div>
          )}
          {repo.Forks > 0 && (
            <div className="flex items-center gap-1 text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
              </svg>
              <span className="text-sm">{repo.Forks}</span>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
        {repo.Description || 'No description provided'}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
        {repo.Language && (
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: languageColor }}
            ></span>
            <span className="text-sm text-gray-400">{repo.Language}</span>
          </div>
        )}
        <a
          href={repo.URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm font-medium"
        >
          View
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

      </div>
    </motion.div>
  );
}
