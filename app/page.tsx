import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { loadGitHubData } from '@/lib/loadData';

export default async function Home() {
  const data = await loadGitHubData();

  return (
    <main>
      <Hero profile={data.profile} />
      <Projects repositories={data.repositories} />
      <Footer profile={data.profile} />
    </main>
  );
}
