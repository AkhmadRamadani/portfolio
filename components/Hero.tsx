'use client';

import { motion } from 'framer-motion';
import type { Profile } from '@/types/github';

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-display text-6xl md:text-8xl font-black mb-6">
            <span className="text-gradient">{profile.Name}</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {profile.Bio}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          {profile.Company && (
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <span>{profile.Company}</span>
            </div>
          )}
          {profile.Location && (
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{profile.Location}</span>
            </div>
          )}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href={profile['Profile URL']}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            View GitHub Profile
          </a>
          {profile.Blog && (
            <a
              href={profile.Blog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-400/30 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              Visit Blog
            </a>
          )}
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient">{profile['Public Repos']}</div>
            <div className="text-gray-400 mt-2">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient">{profile.Followers}</div>
            <div className="text-gray-400 mt-2">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient">{profile.Following}</div>
            <div className="text-gray-400 mt-2">Following</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
