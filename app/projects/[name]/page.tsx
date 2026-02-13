import { loadGitHubData } from '@/lib/loadData';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: {
    name: string;
  };
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await loadGitHubData();
  const decodedName = decodeURIComponent(params.name);
  const repo = data.repositories.find((r) => r['Repository Name'] === decodedName);

  if (!repo) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${repo['Repository Name']} - Project Details`,
    description: repo.Description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const data = await loadGitHubData();
  const decodedName = decodeURIComponent(params.name);
  const repo = data.repositories.find((r) => r['Repository Name'] === decodedName);

  if (!repo) {
    notFound();
  }

  const languageColor = languageColors[repo.Language] || '#8b949e';

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        <div className="glow-card p-8 md:p-12 mb-12 bg-[#0a0e27]/80 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
                {repo['Repository Name']}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                {repo.Description}
              </p>
            </div>

            <div className="flex gap-4 shrink-0">
              <a
                href={repo.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors flex items-center gap-2 text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Code
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 border-t border-gray-700/50 pt-6">
            {repo.Language && (
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: languageColor }}
                ></span>
                {repo.Language}
              </div>
            )}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {repo.Stars} Stars
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
              </svg>
              {repo.Forks} Forks
            </div>
            {repo['Created At'] && (
               <div>Created: {new Date(repo['Created At']).toLocaleDateString()}</div>
            )}
            {repo['Updated At'] && (
               <div>Updated: {new Date(repo['Updated At']).toLocaleDateString()}</div>
            )}
          </div>
        </div>

        {repo['README Content'] && (
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gradient prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-img:rounded-xl">
            <ReactMarkdown>
              {repo['README Content']}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </main>
  );
}
